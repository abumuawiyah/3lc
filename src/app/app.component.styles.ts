export const styleA: object = {
  olStyle: {
    width: "100%",
    margin: "20px 0",
    position: "relative",
    display: "block",
    color: "#ffffff",
    boxShadow: "0px 0px 50px 0px rgba(0,0,0,.2)",
    borderRadius: "30px",
    background: "#1f3a93",
    padding: 0,
    float: "left"
  },
  liStyle: {
    color: "#ffffff",
    height: "50px",
    lineHeight: "50px",
    float: "left",
    padding: "0 12px",
    ".active, & A": {
      color: "#ffffff"
    },
    "&:before": {
      display: "none"
    },
    "&:first-child": {
      padding: 0,
      width: 80
    },
    "&:nth-child(2n)": {
      background: "rgba(0,0,0,.4)"
    },
    "&:nth-child(3n)": { background: "rgba(0,0,0,.3)" },
    "&:nth-child(4n)": { background: "rgba(0,0,0,.2)" },
    "&:nth-child(5n)": { background: "rgba(0,0,0,.1)" },
    "&:last-child": { background: "transparent" }
  },
  indicatorStyle: {
    width: "70px",
    border: "5px solid #ffffff",
    height: 70,
    display: "flex",
    textAlign: "center",
    background: "#1f3a93",
    borderRadius: "50%",
    position: "absolute",
    top: "-12px",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30
  }
};

export const styleB = {
  navStyle: {
    display: "inline-block",
    fontSize: 0
  },
  aStyle: {
    display: "inline-block",
    color: "#333",
    font: "16px/34px 'Noto Sans JP', sans-serif",
    textDecoration: "none",
    height: 34,
    padding: "0 11px 0 calc(11px + 6px)",
    position: "relative",
    "&:first-of-type ": {
      paddingLeft: 11,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5
    },
    "&:last-of-type": {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    },
    "&:after": {
      content: "''",
      display: "block",
      borderTop: "calc(34px/ 2) solid transparent",
      borderBottom: "calc(34px / 2) solid transparent",
      position: "absolute",
      top: 0,
      left: "100%",
      zIndex: 1
    },
    "&:nth-of-type(1)": { background: "#b3e5fc" },
    "&:nth-of-type(2)": { background: "#81d4fa" },
    "&:nth-of-type(3)": { background: "#81d4fa" },
    "&:nth-of-type(4)": { background: "#81d4fa" },
    "&:nth-of-type(5)": { background: "#4fc3f7" },
    "&:nth-of-type(1):after": { borderLeft: "6px solid #b3e5fc" },
    "&:nth-of-type(2):after": { borderLeft: "6px solid #81d4fa" },
    "&:nth-of-type(3):after": { borderLeft: "6px solid #81d4fa" },
    "&:nth-of-type(4):after": { borderLeft: "6px solid #81d4fa" },
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: 2
    }
  }
};

export const styleC = {
  olStyle: {
    display: "flex",
    listStyleType: "none",
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0
  },
  liStyle: {
    display: "inline-block",
    fontFamily: "Arial",
    "&:after": {
      content: "'>'",
      color: "rgb(211, 211, 211)",
      paddingRight: 5,
      paddingLeft: 5
    },
    "&:last-child:after": {
      content: "''"
    }
  },
  aStyle: {
    display: "block",
    float: "left",
    "&:link": {
      textDecoration: "none",
      touchAction: "manipulation",
      color: "#007c89"
    },
    "&:focus": {
      outline: "thin dotted"
    },
    "&:active": {
      outline: 0
    },
    "&:hover": {
      outline: 0
    },
    "&:visited:not([rel='external'])": {
      color: "currentColor"
    },
    "&:link:hover": {
      backgroundImage: "linear-gradient(currentColor, currentColor)",
      backgroundSize: "auto 1px",
      backgroundRepeat: "repeat-x",
      backgroundPosition: "0 calc(50% + 1ex)"
    }
  },
  svgStyle: {
    stroke: "currentColor",
    position: "relative",
    top: ".125em",
    width: "1em",
    height: "1em"
  },
  hiddenStyle: {
    position: "absolute",
    left: "-10000px",
    top: "auto",
    width: 1,
    height: 1,
    overflow: "hidden"
  }
};
