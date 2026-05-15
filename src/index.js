export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
    <header>
    <style>
    body {
    background-color : #e6e6e3;
    }
    h1 {
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    
    }
    </style>
    </header>
    <body>
      <h1>Dear friends, project imbcargo-montenegro.com under construction.</h1>
    </body>`;
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};