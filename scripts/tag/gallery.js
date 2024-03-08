const css = hexo.extend.helper.get('css').bind(hexo);

hexo.extend.injector.register('head_end', () => {
    return css("css/gallery.css");
});

hexo.extend.tag.register("gallery", function(args, content){
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
    content = hexo.render.renderSync({text: content, engine: "markdown"})
    return `
    <div class="x-gallery">
        ${content}
    </div>
    `
}, {ends: true});