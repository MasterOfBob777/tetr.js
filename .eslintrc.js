module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "eslint-comments", "import", "react"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:eslint-comments/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
	],
	rules: {
		"@typescript-eslint/no-unsafe-assignment": ["off"],
		"@typescript-eslint/no-unsafe-argument": ["off"],
		"@typescript-eslint/no-unsafe-call": ["off"],
		"@typescript-eslint/no-unsafe-member-access": ["off"],
		"@typescript-eslint/no-unsafe-return": ["off"],
		"eslint-comments/no-unused-disable": "error",
		"one-var": ["error", "never"],
		"@typescript-eslint/restrict-plus-operands": ["off"],
		"no-empty": ["error", { allowEmptyCatch: true }],
		"lines-between-class-members": ["error", "always"],
		"no-void": ["error", { allowAsStatement: true }],
		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": ["off"],
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{ argsIgnorePattern: "^_" },
		],
		"@typescript-eslint/restrict-template-expressions": [
			"warn",
			{ allowNumber: true, allowBoolean: true },
		],
		"no-empty-pattern": ["warn"],

		/**
		 * Preact / JSX rules
		 */
		"react/no-deprecated": "error",
		"react/react-in-jsx-scope": "off", // handled this automatically
		"react/display-name": ["warn", { ignoreTranspilerName: false }],
		"react/jsx-no-bind": [
			"warn",
			{
				ignoreRefs: true,
				allowFunctions: true,
				allowArrowFunctions: true,
			},
		],
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-no-target-blank": "error",
		"react/jsx-no-undef": "error",
		"react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
		"react/jsx-uses-react": "error", // debatable
		"react/jsx-uses-vars": "error",
		"react/jsx-key": ["error", { checkFragmentShorthand: true }],
		"react/self-closing-comp": "error",
		"react/prefer-es6-class": ["error", "always"],
		"react/prefer-stateless-function": ["error",],
		"react/require-render-return": "error",
		"react/no-danger": "warn",
		// Legacy APIs not supported in Preact:
		"react/no-did-mount-set-state": "error",
		"react/no-did-update-set-state": "error",
		"react/no-find-dom-node": "error",
		"react/no-is-mounted": "error",
		"react/no-string-refs": "error",

		/**
		 * General JavaScript error avoidance
		 */
		"constructor-super": "error",
		"no-caller": "error",
		"no-const-assign": "error",
		"no-delete-var": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-imports": "error",
		"no-empty-pattern": "off",
		"no-empty": "off",
		"no-extra-parens": "off",
		"no-iterator": "error",
		"no-lonely-if": "error",
		"no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
		"no-multi-str": "warn",
		"no-new-wrappers": "error",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-shadow-restricted-names": "error",
		"no-shadow": "off",
		"no-spaced-func": "error",
		"no-this-before-super": "error",
		"no-undef-init": "error",
		"no-unneeded-ternary": "error",
		"no-useless-call": "warn",
		"no-useless-computed-key": "warn",
		"no-useless-concat": "warn",
		"no-useless-constructor": "warn",
		"no-useless-escape": "warn",
		"no-useless-rename": "warn",
		"no-var": "warn",
		"no-with": "error",
		"dot-notation": ["error", { "allowKeywords": false }],
		"no-redeclare": "off",
	},
	settings: {
		react: {
			pragma: "h",
			fragment: "Fragment",
			version: "16.0",
		},
	},
};
