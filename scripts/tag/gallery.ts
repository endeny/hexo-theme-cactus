const cheerio = require('cheerio');

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
    const { column = 3, fancybox } = options
    const weight = Math.floor((100 - column) / (parseInt(column)))
    
    // 使用 cheerio 解析 HTML
    const $ = cheerio.load(content);
    
    // 处理图片，包装成 fancybox 格式
    if (fancybox) {
        //@ts-ignore
        $('img').each((i, elem) => {
            const imgSrc = $(elem).attr('src');
            const imgAlt = $(elem).attr('alt') || '';
            
            // 创建 fancybox 的 a 标签包装
            const aTag = $('<a></a>')
                .attr('href', imgSrc)
                .attr('data-fancybox', 'gallery')
                .css('width', `${weight}%`)
                .css('margin', '0.25rem');
            
            if (imgAlt) {
                aTag.attr('data-caption', imgAlt);
            }
            
            // 用 a 标签包装 img
            $(elem).wrap(aTag);
        });
    } else {
        // 如果只有 img 标签，包装成 fancybox 的 a 标签
        //@ts-ignore
        $('img').each((i, elem) => {
            $(elem).css('width', `${weight}%`)
        });
    }
    
    return `
    <div class="x-gallery">
        ${$.html()}
    </div>
    `
}, {ends: true});