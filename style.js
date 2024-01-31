class Styler {
    constructor(styles) {
      this.styles = styles;
    }
  
    applyStyles(element, selector) {
      const selectedStyles = this.styles[selector];
      if (selectedStyles) {
        for (let property in selectedStyles) {
          if (selectedStyles.hasOwnProperty(property)) {
            element.style[property] = selectedStyles[property];
          }
        }
      }
    }
  
    applyStylesToElements(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        this.applyStyles(element, selector);
      });
    }
  
    applyAllStyles() {
      for (let selector in this.styles) {
        if (this.styles.hasOwnProperty(selector)) {
          this.applyStylesToElements(selector);
        }
      }
    }
  }



  const css = new Styler({
    body: {
      fontFamily: "mi-medium, sans-serif",
      margin: "0",
      padding: "0",
      backgroundColor: "#8B4513",
      color: "#fff"
    },
    header: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px",
      textAlign: "center"
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#444",
      padding: "10px"
    },
    "nav a": {
      color: "#fff",
      textDecoration: "none",
      padding: "10px 20px",
      margin: "0 10px",
      borderRadius: "5px",
      transition: "background-color 0.3s",
      textAlign: "center"
    },
    "nav a:hover": { backgroundColor: "#555" },
    section: { padding: "20px", textAlign: "center" },
    h2: { color: "#fff" },
    ".menu-item": {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #ddd",
      padding: "10px 0",
      margin: "10px 0",
      textAlign: "right"
    },
    ".active-page": { borderBottom: "2px solid #fff" },
    "#span-price": { fontFamily: "mi-black, sans-serif" },
    ".modal": {
      display: "none",
      position: "fixed",
      zIndex: 1,
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0,0,0,0.4)"
    },
    ".modal-content": {
      backgroundColor: "#8B4513",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      color: "#fff",
      textAlign: "center"
    },
    ".close": {
      color: "#fff",
      cssFloat: "right",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer"
    },
    ".close:hover": { color: "#ccc" },
    button: { padding: "10px 20px", fontSize: "16px", cursor: "pointer" },
    ".language-modal": { backgroundColor: "#2c3e50", display: "none" },
    ".language-options": {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px"
    },
    ".language-flag": {
      width: "70px",
      height: "70px",
      cursor: "pointer",
      borderRadius: "50%",
      transition: "transform 0.3s ease-in-out"
    },
    ".language-flag:hover": { transform: "scale(1.1)" },
    footer: { textAlign: "center" },
    "#call": { color: "white", textAlign: "right" },
    "#map": { color: "white" }
  }
  );

  css.applyAllStyles();



  class FontLoader {
    /**
     * Constructor for FontLoader class.
     * @param {object[]} fonts - An array of font objects, each containing fontFamily, fontUrl, and optional fontFormat.
     */
    constructor(fonts) {
      this.fonts = fonts;
    }
  
    /**
     * Load all the fonts by creating style elements and adding them to the head.
     */
    loadFonts() {
      this.fonts.forEach(font => {
        const fontElement = document.createElement('style');
        const fontcss = `
          @font-face {
            font-family: '${font.fontFamily}';
            src: url('${font.fontUrl}') format('${font.fontFormat || 'woff2'}');
            /* You can add other font parameters here, such as font-weight and font-style */
          }
  
          /* Add other styles here */
        `;
  
        fontElement.innerHTML = fontcss;
        document.head.appendChild(fontElement);
      });
    }
  }
  
  // Example of using the updated class
  const fontLoader = new FontLoader([
    { fontFamily: 'mi-medium', fontUrl: 'fonts/Mikhak-DS1-Medium.woff2' },
    { fontFamily: 'mi-black', fontUrl: 'fonts/Mikhak-DS2-Black.woff2' },
  ]);
  
  fontLoader.loadFonts();
  