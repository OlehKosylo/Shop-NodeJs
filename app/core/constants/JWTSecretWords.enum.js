module.exports = {
    AUTHORIZATION:'Authorization',
    JWT_SECRET: process.env.JWT_SECRET ||'$2b$10$lXChHZhnT1gBOpWAaQ6re.GtzKMYuuW51YhBe9nZsGjzsO.9NoARG',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || '$2b$10$9YFFZGUFwgARNHV3jbHxkeyXhKXBgLZqBeevRijxjft2XabnANvga',

    M30: '30m',
    M15: '15m',
    H6: '6h',
};
