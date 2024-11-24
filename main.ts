import * as oak from "jsr:@oak/oak";

const router = new oak.Router();
router.get('/', (ctx) => {
  ctx.response.body = 'Olá Mundo';
})

const app = new oak.Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({port: 8000});


