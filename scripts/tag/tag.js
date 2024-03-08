const css = hexo.extend.helper.get('css').bind(hexo);

hexo.extend.injector.register('head_end', () => {
    return css("css/tag.css");
});

hexo.extend.tag.register("tag", function(args, content){
    const options = {}
    let value = null
    args.map(arg => {
        if (arg.includes("=")) {
            const [option, value] = arg.split("=")
            options[option] = value
        } else {
            value = arg
        }
    });
    const color = options?.color || "red"
    const style = {
        "--my-bg": `var(--my-${color}-1)`,
        "--my-border": `var(--my-${color}-3)`,
        "--my-color": `var(--my-${color}-7)`,
    }
    const css = Object.entries(style).reduce((acc, [key, value]) => {
        return acc + `${key}:${value};`
    }, "");
    return `<span class="x-tag" style="${css}">${value}</span>`
}, {ends: false});