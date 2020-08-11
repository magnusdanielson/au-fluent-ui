export class gettingstarted
{
    attached()
    {
        document.querySelectorAll('pre code').forEach((block) => {
            //@ts-ignore
            hljs.highlightBlock(block);
          });
    }
}