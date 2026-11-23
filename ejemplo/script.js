// =========================================
    // CONFIGURACIÓN DE PALETAS PREDEFINIDAS
    // =========================================
    const PALETAS = {
      obsidian: {
        nombre: "Obsidian Orange",
        "--bg-color": "#0b0b0d",
        "--surface-color": "#16161a",
        "--text-color": "#f4f4f6",
        "--muted-color": "#9ca3af",
        "--accent-color": "#ff6b00",
        "--border-color": "rgba(255, 255, 255, 0.1)"
      },
      light: {
        nombre: "Minimal Light",
        "--bg-color": "#f8fafc",
        "--surface-color": "#ffffff",
        "--text-color": "#0f172a",
        "--muted-color": "#64748b",
        "--accent-color": "#2563eb",
        "--border-color": "rgba(15, 23, 42, 0.12)"
      },
      emerald: {
        nombre: "Forest Dark",
        "--bg-color": "#071311",
        "--surface-color": "#0e221e",
        "--text-color": "#ecfdf5",
        "--muted-color": "#6ee7b7",
        "--accent-color": "#10b981",
        "--border-color": "rgba(16, 185, 129, 0.18)"
      },
      nord: {
        nombre: "Nordic Slate",
        "--bg-color": "#1e222a",
        "--surface-color": "#282c34",
        "--text-color": "#eceff4",
        "--muted-color": "#9aa5b1",
        "--accent-color": "#88c0d0",
        "--border-color": "rgba(236, 239, 244, 0.1)"
      }
    };

    const root = document.documentElement;
    const presetContainer = document.getElementById("presetContainer");
    const colorInputs = document.querySelectorAll('input[type="color"]');
    const STORAGE_KEY = "custom_theme_palette";

    // Renderizar botones de paletas predefinidas
    function renderPresetButtons() {
      presetContainer.innerHTML = "";
      Object.entries(PALETAS).forEach(([key, paleta]) => {
        const btn = document.createElement("button");
        btn.className = "preset-btn";
        btn.dataset.preset = key;
        btn.innerHTML = `
          <span class="dot" style="background:${paleta["--accent-color"]}"></span>
          ${paleta.nombre}
        `;
        btn.addEventListener("click", () => aplicarPaleta(paleta, key));
        presetContainer.appendChild(btn);
      });
    }

    // Aplicar un objeto de variables al :root y sincronizar inputs
    function aplicarPaleta(paleta, presetKey = null) {
      Object.entries(paleta).forEach(([prop, valor]) => {
        if (prop.startsWith("--")) {
          root.style.setProperty(prop, valor);
        }
      });

      // Sincronizar selectores de color visuales y etiquetas HEX
      colorInputs.forEach(input => {
        const cssVar = input.dataset.var;
        if (paleta[cssVar]) {
          input.value = paleta[cssVar];
          input.previousElementSibling.textContent = paleta[cssVar].toUpperCase();
        }
      });

      // Marcar botón activo si corresponde a un preset
      document.querySelectorAll(".preset-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.preset === presetKey);
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify({ paleta, presetKey }));
    }

    // Escuchar cambios manuales en cada selector de color
    colorInputs.forEach(input => {
      input.addEventListener("input", (e) => {
        const cssVar = e.target.dataset.var;
        const nuevoColor = e.target.value;

        root.style.setProperty(cssVar, nuevoColor);
        e.target.previousElementSibling.textContent = nuevoColor.toUpperCase();

        // Quitar estado activo de los presets predefinidos al personalizar
        document.querySelectorAll(".preset-btn").forEach(b => b.classList.remove("active"));

        // Guardar estado actual
        const estadoActual = obtenerEstadoActual();
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ paleta: estadoActual, presetKey: null }));
      });
    });

    // Obtener valores actuales desde el :root
    function obtenerEstadoActual() {
      const styles = getComputedStyle(root);
      return {
        "--bg-color": styles.getPropertyValue("--bg-color").trim(),
        "--surface-color": styles.getPropertyValue("--surface-color").trim(),
        "--text-color": styles.getPropertyValue("--text-color").trim(),
        "--muted-color": styles.getPropertyValue("--muted-color").trim(),
        "--accent-color": styles.getPropertyValue("--accent-color").trim(),
        "--border-color": styles.getPropertyValue("--border-color").trim()
      };
    }

    // Botón restaurar por defecto
    document.getElementById("resetBtn").addEventListener("click", () => {
      aplicarPaleta(PALETAS.obsidian, "obsidian");
    });

    // Botón copiar variables CSS generadas al portapapeles
    document.getElementById("copyCssBtn").addEventListener("click", (e) => {
      const actual = obtenerEstadoActual();
      const cssText = `:root {\n` +
        Object.entries(actual).map(([k, v]) => `  ${k}: ${v};`).join("\n") +
        `\n}`;

      navigator.clipboard.writeText(cssText).then(() => {
        const originalText = e.target.textContent;
        e.target.textContent = "¡Variables CSS copiadas!";
        setTimeout(() => e.target.textContent = originalText, 2000);
      });
    });

    // Inicialización al cargar la página
    renderPresetButtons();
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (guardado) {
      const { paleta, presetKey } = JSON.parse(guardado);
      aplicarPaleta(paleta, presetKey);
    } else {
      aplicarPaleta(PALETAS.obsidian, "obsidian");
    }