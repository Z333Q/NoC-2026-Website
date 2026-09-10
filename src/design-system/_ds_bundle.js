/* @ds-bundle: {"format":4,"namespace":"NatureOfCommerceDesignSystem_c09da6","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"3b5997c8ab75","components/core/Card.jsx":"4ca602153b38","components/core/Input.jsx":"1b58fa42e283","components/core/SectionLabel.jsx":"c9c154f4ef44","components/core/Tag.jsx":"b1054363ac08","ui_kits/website/Footer.jsx":"adfe2995e8fc","ui_kits/website/HeroSection.jsx":"3693a362a0a7","ui_kits/website/Icons.jsx":"f986398f6336","ui_kits/website/Navbar.jsx":"8e6f1b27dce0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NatureOfCommerceDesignSystem_c09da6 = window.NatureOfCommerceDesignSystem_c09da6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '10px 20px',
    fontSize: '13px',
    gap: '6px'
  },
  md: {
    padding: '16px 32px',
    fontSize: '15px',
    gap: '8px'
  },
  lg: {
    padding: '20px 40px',
    fontSize: '17px',
    gap: '10px'
  }
};

/**
 * Primary interactive element for all CTAs and actions.
 * Three variants: primary (gradient blue), secondary (ghost with border), ghost (text-only).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  href,
  target,
  rel,
  className = '',
  style: extraStyle = {}
}) {
  const [hovered, setHovered] = useState(false);
  const sizeStyle = SIZES[size] || SIZES.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-lg)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'all var(--transition-base)',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    opacity: disabled ? 0.5 : 1,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...sizeStyle,
    ...extraStyle
  };
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
      color: '#ffffff',
      boxShadow: hovered && !disabled ? 'var(--shadow-btn-hover)' : 'var(--shadow-btn)',
      transform: hovered && !disabled ? 'translateY(-3px)' : 'none'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      border: '1px solid ' + (hovered && !disabled ? 'var(--color-primary)' : 'var(--color-border)'),
      boxShadow: hovered && !disabled ? 'var(--shadow-btn-sm)' : 'none',
      transform: hovered && !disabled ? 'translateY(-3px)' : 'none'
    },
    ghost: {
      background: 'transparent',
      color: hovered && !disabled ? 'var(--color-text-primary)' : 'var(--color-primary)',
      border: 'none'
    }
  };
  const finalStyle = {
    ...base,
    ...(variantStyles[variant] || variantStyles.primary)
  };
  const sharedProps = {
    style: finalStyle,
    className,
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => setHovered(false),
    'aria-disabled': disabled
  };
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      target: target,
      rel: rel
    }, sharedProps), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: disabled ? undefined : onClick
  }, sharedProps), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Glass morphism card — the foundational surface component.
 * Three variants: default (subtle), elevated (stronger blur), interactive (lifts + glows on hover).
 */
function Card({
  children,
  variant = 'default',
  padding = '32px',
  radius = 'var(--radius-xl)',
  className = '',
  style: extraStyle = {},
  onClick,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const base = {
    borderRadius: radius,
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    fontFamily: 'var(--font-body)',
    position: 'relative',
    overflow: 'hidden',
    padding
  };
  const variantStyles = {
    default: {
      background: 'var(--color-bg-card)',
      border: `1px solid ${hovered ? 'var(--color-border-hover)' : 'var(--color-border)'}`,
      boxShadow: hovered ? 'var(--shadow-glow)' : 'none',
      transition: 'all var(--transition-base)'
    },
    elevated: {
      background: 'linear-gradient(135deg, rgba(20,20,32,0.80) 0%, rgba(10,10,16,0.90) 100%)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: `1px solid ${hovered ? 'var(--color-border-hover)' : 'var(--color-border)'}`,
      boxShadow: hovered ? 'var(--shadow-glow)' : 'var(--shadow-card)',
      transition: 'all var(--transition-base)'
    },
    interactive: {
      background: 'linear-gradient(135deg, rgba(20,20,32,0.60) 0%, rgba(10,10,16,0.80) 100%)',
      border: `1px solid ${hovered ? 'var(--color-border-active)' : 'var(--color-border)'}`,
      boxShadow: hovered ? 'var(--shadow-glow-lg)' : 'none',
      transform: hovered ? 'translateY(-8px) scale(1.01)' : 'none',
      transition: 'all var(--transition-slow)',
      cursor: onClick ? 'pointer' : 'default'
    }
  };
  const finalStyle = {
    ...base,
    ...(variantStyles[variant] || variantStyles.default),
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: finalStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Dark-themed text input with label, focus ring, and optional error state.
 * Used in contact forms, apply forms, and any data entry.
 */
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  required = false,
  rows,
  className = '',
  id,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const fieldStyle = {
    width: '100%',
    padding: '16px 20px',
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    color: 'var(--color-text-primary)',
    background: 'var(--color-bg-tertiary)',
    border: `1px solid ${error ? 'var(--color-error)' : focused ? 'var(--color-primary)' : 'var(--color-border)'}`,
    borderRadius: 'var(--radius-lg)',
    outline: 'none',
    transition: 'all var(--transition-fast)',
    boxSizing: 'border-box',
    boxShadow: focused ? '0 0 0 4px rgba(74,144,217,0.15)' : 'none',
    resize: rows ? 'vertical' : 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'text',
    display: 'block'
  };
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const shared = {
    id: inputId,
    disabled,
    placeholder,
    value,
    onChange,
    required,
    style: fieldStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--color-text-secondary)',
      letterSpacing: '0.02em'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)',
      marginLeft: '4px'
    },
    "aria-hidden": "true"
  }, "*")), rows ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: 'var(--color-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/**
 * Section header pill — small uppercase label with optional pulsing blue dot.
 * Always appears above section headings to signal content type/category.
 */
function SectionLabel({
  children,
  showDot = true,
  className = '',
  style: extraStyle = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      padding: '10px 20px',
      background: 'rgba(74, 144, 217, 0.08)',
      border: '1px solid rgba(74, 144, 217, 0.20)',
      borderRadius: 'var(--radius-full)',
      backdropFilter: 'blur(8px)',
      userSelect: 'none',
      ...extraStyle
    }
  }, showDot && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--color-primary)',
      flexShrink: 0,
      animation: 'glow-pulse 2s ease-in-out infinite'
    },
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const {
  useState
} = React;
const COLOR_MAP = {
  blue: {
    background: 'rgba(74, 144, 217, 0.10)',
    color: 'var(--color-primary-light)',
    border: 'rgba(74, 144, 217, 0.20)',
    hoverBg: 'rgba(74, 144, 217, 0.20)',
    hoverBorder: 'rgba(74, 144, 217, 0.30)'
  },
  emerald: {
    background: 'rgba(52, 211, 153, 0.10)',
    color: '#34D399',
    border: 'rgba(52, 211, 153, 0.20)',
    hoverBg: 'rgba(52, 211, 153, 0.20)',
    hoverBorder: 'rgba(52, 211, 153, 0.30)'
  },
  amber: {
    background: 'rgba(245, 158, 11, 0.10)',
    color: '#F59E0B',
    border: 'rgba(245, 158, 11, 0.20)',
    hoverBg: 'rgba(245, 158, 11, 0.20)',
    hoverBorder: 'rgba(245, 158, 11, 0.30)'
  },
  teal: {
    background: 'rgba(45, 212, 191, 0.10)',
    color: '#2DD4BF',
    border: 'rgba(45, 212, 191, 0.20)',
    hoverBg: 'rgba(45, 212, 191, 0.20)',
    hoverBorder: 'rgba(45, 212, 191, 0.30)'
  }
};

/**
 * Technology / topic pill label.
 * Used for skill tags, venture categories, and protocol references.
 */
function Tag({
  children,
  color = 'blue',
  className = ''
}) {
  const [hovered, setHovered] = useState(false);
  const c = COLOR_MAP[color] || COLOR_MAP.blue;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      borderRadius: 'var(--radius-full)',
      border: `1px solid ${hovered ? c.hoverBorder : c.border}`,
      background: hovered ? c.hoverBg : c.background,
      color: c.color,
      transition: 'all var(--transition-fast)',
      userSelect: 'none'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Nature of Commerce UI Kit — Footer

function NocFooter({
  onNavigate
}) {
  const navLinks = [{
    label: 'Stack',
    id: 'stack'
  }, {
    label: 'Thesis',
    id: 'thesis'
  }, {
    label: 'About',
    id: 'team'
  }, {
    label: 'Insights',
    id: 'insights'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  const ventures = [{
    label: 'P402.io',
    href: 'https://www.p402.io'
  }, {
    label: 'ReFi Trading',
    href: 'https://refi.trading'
  }, {
    label: 'RapMath',
    href: 'https://www.rapmath.com'
  }, {
    label: 'EYEcercise',
    href: 'https://eyecercise.com'
  }, {
    label: 'Wholesome Linen',
    href: 'https://wholesomelinen.com'
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--color-border)',
      transition: 'background 300ms ease, border-color 300ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '64px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: '48px',
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.nocLogo || "../../assets/logos/artboard_1.png",
    alt: "NOC",
    style: {
      width: '48px',
      height: '48px',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      transition: 'color 300ms ease'
    }
  }, "Nature of Commerce")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.7,
      maxWidth: '380px',
      marginBottom: '12px',
      transition: 'color 300ms ease'
    }
  }, "20 years building infrastructure that opens financial access \u2014 from rural banking terminals to autonomous AI agents."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--color-text-muted)',
      lineHeight: 1.7,
      maxWidth: '380px',
      marginBottom: '8px',
      transition: 'color 300ms ease'
    }
  }, "Nature of Commerce LLC, Wyoming. Studio vehicle for P402.io and adjacent ventures."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: '#4A90D9',
      fontWeight: 500,
      fontStyle: 'italic',
      marginBottom: '24px'
    }
  }, "The mechanics of participation. The nature of commerce."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, [{
    icon: IconLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/zeshanahmad'
  }, {
    icon: IconGithub,
    label: 'GitHub',
    href: 'https://github.com/Z333Q'
  }, {
    icon: IconTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/NatureofCommerce'
  }, {
    icon: IconMail,
    label: 'Email',
    href: 'mailto:zeshan@natureofcommerce.com'
  }].map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label,
    style: {
      padding: '8px',
      background: 'var(--color-bg-card)',
      border: '1px solid var(--color-border)',
      borderRadius: '10px',
      color: 'var(--color-text-muted)',
      display: 'flex',
      transition: 'all 200ms ease',
      textDecoration: 'none'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = '#4A90D9';
      e.currentTarget.style.borderColor = 'rgba(74,144,217,0.40)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--color-text-muted)';
      e.currentTarget.style.borderColor = 'var(--color-border)';
    }
  }, /*#__PURE__*/React.createElement(s.icon, {
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#4A90D9',
      marginBottom: '16px'
    }
  }, "Navigate"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, navLinks.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.id
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate(l.id),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--color-text-secondary)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      transition: 'color 150ms ease'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--color-text-secondary)'
  }, l.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#4A90D9',
      marginBottom: '16px'
    }
  }, "Ventures"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, ventures.map(v => /*#__PURE__*/React.createElement("li", {
    key: v.href
  }, /*#__PURE__*/React.createElement("a", {
    href: v.href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--color-text-secondary)',
      textDecoration: 'none',
      transition: 'color 150ms ease',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--color-text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--color-text-secondary)'
  }, v.label, " ", /*#__PURE__*/React.createElement(IconArrowUpRight, null))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-border)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'border-color 300ms ease'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--color-text-muted)',
      transition: 'color 300ms ease'
    }
  }, "\xA9 ", new Date().getFullYear(), " Nature of Commerce LLC. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: 'var(--color-text-muted)',
      textDecoration: 'none',
      transition: 'color 300ms ease'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      color: 'var(--color-text-muted)',
      textDecoration: 'none',
      transition: 'color 300ms ease'
    }
  }, "Terms of Service")))));
}
Object.assign(window, {
  NocFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroSection.jsx
try { (() => {
// Nature of Commerce UI Kit — Hero Section

function NocHero({
  onNavigate
}) {
  const stats = [{
    value: '$1.2B+',
    label: 'Financial transactions architected'
  }, {
    value: '3',
    label: 'Continents with deployed payment infrastructure'
  }, {
    value: '46',
    label: 'Wireless banking patents commercialized'
  }, {
    value: '20+',
    label: 'Years building financial infrastructure'
  }];
  const pillars = [{
    n: '01',
    icon: IconCpu,
    title: 'P402.io',
    label: 'Agentic Payments',
    color: '#4A90D9',
    rgb: '74,144,217',
    bc: 'rgba(74,144,217,0.25)',
    facts: ['300+ AI models routed', 'x402 USDC settlement', 'Google A2A protocol', 'Published @p402/sdk']
  }, {
    n: '02',
    icon: IconTrendingUp,
    title: 'ReFi Trading',
    label: 'Algorithmic Portfolio Mgmt',
    color: '#34D399',
    rgb: '52,211,153',
    bc: 'rgba(52,211,153,0.25)',
    facts: ['28% CAGR, 2.07 Sharpe', 'USPTO patent filed', 'zk-VaR risk engine', 'ADGM Category 3A']
  }, {
    n: '03',
    icon: IconShield,
    title: 'Compliance Layer',
    label: 'Automated Compliance',
    color: '#F59E0B',
    rgb: '245,158,11',
    bc: 'rgba(245,158,11,0.25)',
    facts: ['Zero-knowledge proofs', 'Cryptographic audit logs', 'ADGM + SOC-2 + CTA', 'No manual oversight']
  }];
  const heroTextStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.8rem,6vw,5.5rem)',
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '-0.04em',
    color: 'var(--color-text-primary)',
    marginBottom: '24px',
    transition: 'color 300ms ease'
  };
  const cardStyle = (rgb, bc) => ({
    background: `linear-gradient(135deg, rgba(${rgb},0.06) 0%, var(--color-card-gradient-end) 100%)`,
    border: `1px solid ${bc}`,
    borderRadius: '20px',
    padding: '28px',
    transition: 'all 300ms ease',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)'
  });
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--color-bg-primary)',
      minHeight: '100vh',
      transition: 'background 300ms ease'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(var(--color-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid-line) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
      pointerEvents: 'none',
      transition: 'background-image 300ms ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-80px',
      right: '-80px',
      width: '600px',
      height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(74,144,217,0.22) 0%, transparent 70%)',
      filter: 'blur(100px)',
      pointerEvents: 'none',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '40px 24px',
      position: 'relative',
      zIndex: 1,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#4A90D9',
      padding: '10px 20px',
      background: 'rgba(74,144,217,0.08)',
      border: '1px solid rgba(74,144,217,0.20)',
      borderRadius: '9999px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#4A90D9',
      animation: 'glow-pulse 2s ease-in-out infinite'
    }
  }), "Builder Studio")), /*#__PURE__*/React.createElement("h1", {
    style: heroTextStyle
  }, "Build Technology That Creates", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg, #7EB8F0 0%, #4A90D9 40%, #60A5FA 80%, #7EB8F0 100%)',
      backgroundSize: '300% 300%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'gradient-flow 8s ease infinite'
    }
  }, "Opportunity")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1.1rem,2vw,1.3rem)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.7,
      marginBottom: '12px',
      maxWidth: '520px',
      transition: 'color 300ms ease'
    }
  }, "20 years of creating access to global markets."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--color-text-secondary)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fontWeight: 500,
      marginBottom: '16px',
      transition: 'color 300ms ease'
    }
  }, "Payments.\xA0\xA0 Trading.\xA0\xA0 Education.\xA0\xA0 Ownership."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: '#4A90D9',
      fontWeight: 500,
      letterSpacing: '0.04em',
      marginBottom: '48px',
      maxWidth: '480px'
    }
  }, "The mechanics of participation.\xA0 The nature of commerce."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      marginBottom: '80px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('stack'),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      fontWeight: 600,
      color: '#fff',
      padding: '16px 32px',
      background: 'linear-gradient(135deg,#4A90D9,#2563EB)',
      border: 'none',
      borderRadius: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 4px 15px rgba(74,144,217,0.3)'
    }
  }, "See the Stack ", /*#__PURE__*/React.createElement(IconArrowRight, {
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('thesis'),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      padding: '16px 32px',
      background: 'transparent',
      border: '1px solid var(--color-border)',
      borderRadius: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 300ms ease'
    }
  }, /*#__PURE__*/React.createElement(IconBookOpen, {
    size: 18
  }), " Read the Thesis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '16px'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      background: 'var(--color-bg-card)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid var(--color-border)',
      borderRadius: '16px',
      padding: '28px 20px',
      textAlign: 'center',
      transition: 'background 300ms ease, border-color 300ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-value"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "stat-label"
  }, s.label)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 0',
      borderTop: '1px solid var(--color-border)',
      transition: 'border-color 300ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '56px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#4A90D9',
      padding: '10px 20px',
      background: 'rgba(74,144,217,0.08)',
      border: '1px solid rgba(74,144,217,0.20)',
      borderRadius: '9999px',
      marginBottom: '20px',
      width: 'fit-content'
    }
  }, "The Infrastructure Stack"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem,4vw,3.5rem)',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      color: 'var(--color-text-primary)',
      marginBottom: '20px',
      transition: 'color 300ms ease'
    }
  }, "Three Pillars,", ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg,#7EB8F0,#4A90D9,#60A5FA)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, "One System")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1.1rem,2vw,1.3rem)',
      color: 'var(--color-text-secondary)',
      lineHeight: 1.7,
      maxWidth: '640px',
      transition: 'color 300ms ease'
    }
  }, "Not separate products. Interlocking layers of the same infrastructure, built by the same team, from first principles.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, pillars.map(p => {
    const Ic = p.icon;
    return /*#__PURE__*/React.createElement("div", {
      key: p.n,
      style: cardStyle(p.rgb, p.bc)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '32px',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        width: '200px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '12px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '56px',
        fontWeight: 700,
        color: 'var(--color-decorative-num)',
        lineHeight: 1,
        transition: 'color 300ms ease'
      }
    }, p.n), /*#__PURE__*/React.createElement(Ic, {
      size: 28,
      style: {
        color: p.color
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '10px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--color-text-muted)',
        marginBottom: '4px',
        transition: 'color 300ms ease'
      }
    }, p.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '22px',
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        transition: 'color 300ms ease'
      }
    }, p.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px'
      }
    }, p.facts.map(f => /*#__PURE__*/React.createElement("div", {
      key: f,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement(IconCheckCircle, {
      size: 14,
      style: {
        color: p.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        color: 'var(--color-text-secondary)',
        transition: 'color 300ms ease'
      }
    }, f)))))));
  })))));
}
Object.assign(window, {
  NocHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icons.jsx
try { (() => {
// Nature of Commerce UI Kit — Shared Icons
// Simple inline SVG components for all Lucide icons used on the site.
// Export to window so all UI kit files can use them.

function IconArrowRight({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  }));
}
function IconExternalLink({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }));
}
function IconShield({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }));
}
function IconCpu({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "2",
    x2: "9",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "2",
    x2: "15",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "9",
    y2: "22"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "20",
    x2: "15",
    y2: "22"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "9",
    x2: "22",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "14",
    x2: "22",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "9",
    x2: "4",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    y1: "14",
    x2: "4",
    y2: "14"
  }));
}
function IconTrendingUp({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "23 6 13.5 15.5 8.5 10.5 1 18"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "17 6 23 6 23 12"
  }));
}
function IconBookOpen({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
  }));
}
function IconGithub({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
}
function IconMenu({
  size = 24
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
}
function IconX({
  size = 24
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
}
function IconCheckCircle({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }));
}
function IconLayers({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "2 17 12 22 22 17"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "2 12 12 17 22 12"
  }));
}
function IconChevronDown({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
}
function IconLinkedin({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  }));
}
function IconTwitter({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  }));
}
function IconMail({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
}
function IconArrowUpRight({
  size = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "17",
    x2: "17",
    y2: "7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  }));
}
function IconSun({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.22",
    y1: "4.22",
    x2: "5.64",
    y2: "5.64"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18.36",
    y1: "18.36",
    x2: "19.78",
    y2: "19.78"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "12",
    x2: "3",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "23",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.22",
    y1: "19.78",
    x2: "5.64",
    y2: "18.36"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18.36",
    y1: "5.64",
    x2: "19.78",
    y2: "4.22"
  }));
}
function IconMoon({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }));
}
Object.assign(window, {
  IconArrowRight,
  IconExternalLink,
  IconShield,
  IconCpu,
  IconTrendingUp,
  IconBookOpen,
  IconGithub,
  IconMenu,
  IconX,
  IconCheckCircle,
  IconLayers,
  IconChevronDown,
  IconLinkedin,
  IconTwitter,
  IconMail,
  IconArrowUpRight,
  IconSun,
  IconMoon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navbar.jsx
try { (() => {
// Nature of Commerce UI Kit — Navbar
// Fixed navigation with scroll effect, mobile menu, and light/dark toggle

function NocNavbar({
  activePage = 'home',
  onNavigate,
  theme = 'dark',
  onThemeToggle
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const navLinks = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'stack',
    label: 'Stack'
  }, {
    id: 'thesis',
    label: 'Thesis'
  }, {
    id: 'team',
    label: 'About'
  }, {
    id: 'insights',
    label: 'Insights'
  }];
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 300ms ease',
    padding: scrolled ? '12px 0' : '20px 0',
    background: scrolled ? 'var(--color-nav-bg-scrolled)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--color-border)' : 'none'
  };
  const goTo = page => {
    if (onNavigate) onNavigate(page);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyle
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => goTo('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.nocLogo || "../../assets/logos/artboard_1.png",
    alt: "NOC",
    style: {
      width: '40px',
      height: '40px',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      letterSpacing: '-0.02em',
      transition: 'color 300ms ease'
    }
  }, "Nature of Commerce")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, navLinks.map(link => /*#__PURE__*/React.createElement("button", {
    key: link.id,
    onClick: () => goTo(link.id),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 500,
      color: activePage === link.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 0',
      position: 'relative',
      transition: 'color 150ms ease'
    }
  }, link.label, activePage === link.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      height: '2px',
      background: 'linear-gradient(90deg,transparent,#4A90D9,transparent)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onThemeToggle,
    title: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    style: {
      padding: '9px',
      background: 'var(--color-bg-card)',
      border: '1px solid var(--color-border)',
      borderRadius: '10px',
      color: 'var(--color-text-secondary)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 200ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = '#4A90D9';
      e.currentTarget.style.borderColor = 'rgba(74,144,217,0.40)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--color-text-secondary)';
      e.currentTarget.style.borderColor = 'var(--color-border)';
    }
  }, theme === 'dark' ? /*#__PURE__*/React.createElement(IconSun, {
    size: 16
  }) : /*#__PURE__*/React.createElement(IconMoon, {
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => goTo('contact'),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      padding: '10px 20px',
      background: 'transparent',
      border: '1px solid var(--color-border)',
      borderRadius: '16px',
      cursor: 'pointer',
      transition: 'all 300ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = '#4A90D9';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--color-border)';
    }
  }, "Contact"), /*#__PURE__*/React.createElement("button", {
    onClick: () => goTo('thesis'),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 600,
      color: '#fff',
      padding: '10px 20px',
      background: 'linear-gradient(135deg,#4A90D9,#2563EB)',
      border: 'none',
      borderRadius: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      boxShadow: '0 4px 15px rgba(74,144,217,0.3)',
      transition: 'all 300ms ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(74,144,217,0.4)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(74,144,217,0.3)';
    }
  }, "Builder Thesis ", /*#__PURE__*/React.createElement(IconArrowRight, {
    size: 14
  })))));
}
Object.assign(window, {
  NocNavbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

})();
