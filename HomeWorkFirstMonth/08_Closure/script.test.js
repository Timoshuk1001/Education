const {
    tickets,
    getSum,
    getQuntityPostsByAuthor,
    complexFunction,
    cache,
    cachedFunc } = require('./script')

describe('tickets', function () {
    test('Vasya doesnt have change', function () {
        expect(tickets([25,50,100])).toBe('NO');
    });
    test('Vasya have change', function () {
        expect(tickets([25,25,50,100])).toBe('YES');
    });
    test('Vasya doesnt have change', function () {
        expect(tickets([25,100])).toBe('NO');
    });
    test('Vasya have change', function () {
        expect(tickets([25,25,50])).toBe('YES');
    });
});

describe('getSum', function () {
    test('return sum of two string arguments', function () {
        expect(getSum('123', '324')).toBe('447');
    });
    test('return sum of two string arguments', function () {
        expect(getSum('111111111111111111111111111111111111111111111111111',
    '23333333333333333333333333333333333333333333333333')).toBe('34444444444444444444444444444444444444444444444444');
    });
});

describe('getQuntityPostsByAuthor', function () {
    let listOfPosts2 = [
        {
            id: 1,
            post: "some post1",
            title: "title 1",
            author: "Ivanov",
            comments: [
                {
                    id: 1.1,
                    comment: "some comment1",
                    title: "title 1",
                    author: "Rimus",
                },
                {
                    id: 1.2,
                    comment: "some comment2",
                    title: "title 2",
                    author: "Uncle",
                },
            ],
        },
        {
            id: 2,
            post: "some post2",
            title: "title 2",
            author: "Ivanov",
            comments: [
                {
                    id: 1.1,
                    comment: "some comment1",
                    title: "title 1",
                    author: "Rimus",
                },
                {
                    id: 1.2,
                    comment: "some comment2",
                    title: "title 2",
                    author: "Uncle",
                },
                {
                    id: 1.3,
                    comment: "some comment3",
                    title: "title 3",
                    author: "Rimus",
                },
            ],
        },
        {
            id: 3,
            post: "some post3",
            title: "title 3",
            author: "Rimus",
        },
        {
            id: 4,
            post: "some post4",
            title: "title 4",
            author: "Uncle",
        },
    ];
    test('return number of post and comment', function () {
        expect(getQuntityPostsByAuthor(listOfPosts2, 'Rimus')).toStrictEqual([1,3])
    })
    test('return number of post and comment', function () {
        expect(getQuntityPostsByAuthor(listOfPosts2, 'Uncle')).toStrictEqual([1,2])
    })
})

