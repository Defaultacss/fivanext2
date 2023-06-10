import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async function ({ articles, categories }: any) {
    const links = [
        { url: "/", changefreq: "daily", priority: 0.3 },
        { url: "/index", changefreq: "daily", priority: 0.3 },
        { url: "/about", changefreq: "daily", priority: 0.3 },
        { url: "/administrator", changefreq: "daily", priority: 0.3 },
        { url: "/bigconstumer", changefreq: "daily", priority: 0.3 },
        { url: "/digitalitation", changefreq: "daily", priority: 0.3 },
        { url: "/energy", changefreq: "daily", priority: 0.3 },
        { url: "/power", changefreq: "daily", priority: 0.3 },
        { url: "/price", changefreq: "daily", priority: 0.3 },
        { url: "/pyme", changefreq: "daily", priority: 0.3 },
        { url: "/solutions", changefreq: "daily", priority: 0.3 },
        { url: "/transition", changefreq: "daily", priority: 0.3 },
        { url: "/blog", changefreq: "daily", priority: 0.3 },
    ];

    articles?.map((article: any) => {
        const url = {
            url: `/article/${article.id}`,
            changefreq: "daily",
            priority: 0.3,
        };
        links.push(url);
    });
    categories?.map((category: any) => {
        const url = {
            url: `/category/${category.id}`,
            changefreq: "daily",
            priority: 0.3,
        };
        links.push(url);
    });

    const stream = new SitemapStream({ hostname: process.env.NEXT_APP_URL });

    return streamToPromise(Readable.from(links).pipe(stream)).then((data: any) =>
        data.toString()
    );
}
