// @ts-ignore
const css = hexo.extend.helper.get('css').bind(hexo);

// @ts-ignore
hexo.extend.injector.register('head_end', () => {
    return css("css/gallery.css");
});

// @ts-ignore
hexo.extend.tag.register("gallery", function(args, content){
    let options = {}
    let value = null
    args.map(arg => {
        if (arg.includes("=")) {
            const [option, value] = arg.split("=")
            // @ts-ignore
            options[option] = value
        } else {
            value = arg
        }
    });
    // @ts-ignore
    content = hexo.render.renderSync({text: content, engine: "markdown"})
    content = content.replaceAll(`src="/`, `src="./`)
    // @ts-ignore
    const { column = 3 } = options
    const weight = Math.floor((100 - column) / (parseInt(column)))
    content = content.replaceAll(`<img`, `<img style="width:${weight}%"`)
    return `
    <div class="x-gallery">
        ${content}
    </div>
    `
}, {ends: true});