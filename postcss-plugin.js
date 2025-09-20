const selectorParser = require('postcss-selector-parser');

const plugin = () => {
    return {
        postcssPlugin: 'encode-link-classes',
        Rule(rule) {
            if (rule.selector.includes('link-')) {
                rule.selector = selectorParser((selectors) => {
                    selectors.walkClasses((classNode) => {
                        if (classNode.value.startsWith('link-')) {
                            const platform = classNode.value.slice(5);
                            const encoded = Buffer.from(platform).toString('base64').replace(/[^a-zA-Z0-9]/g, '');
                            classNode.value = 'link-' + encoded;
                        }
                    });
                }).processSync(rule.selector);
            }
        }
    };
};

plugin.postcss = true;

module.exports = plugin;
