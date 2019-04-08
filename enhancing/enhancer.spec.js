const enhancer = require('./enhancer.js');
// test away!

const item1 = {
    name: "sword",
    enhancement: 10,
    durability: 90
}

const item2 = {
    name: "sword",
    enhancement: 20,
    durability: 90
}

const item3 = {
    name: "sword",
    enhancement: 10,
    durability: 90
}
const item4 = {
    name: "sword",
    enhancement: 15,
    durability: 90
}

const item5 = {
    name: "sword",
    enhancement: 16,
    durability: 90
}

describe('enhancer module', () => {

    describe('repair function', () => {
        it('should restore durability to 100', () => {
            expect(enhancer.repair(item1)).toEqual( {name: "sword", enhancement: 10, durability: 100} );
        })
    })

    describe('succeed function', () => {
        it('should add one to durability if below 20', () => {
            expect(enhancer.succeed(item1)).toEqual({name: "sword", enhancement: 11, durability: 90} );
            expect(enhancer.succeed(item2)).toEqual({name: "sword", enhancement: 20, durability: 90} );
        })
    })
    console.log(item1)

    describe('fail function', () => {
        it(`If the item\'s enhancement is less than 15, the durability of the item is decreased by 5`
        , () => {
            expect(enhancer.fail(item3)).toEqual({name: "sword", enhancement: 10, durability: 85} );
        })

        it('If the item\'s enhancement is 15 or more, the durability of the item is decreased by 10.'
        , () => {
            expect(enhancer.fail(item2)).toEqual({name: "sword", enhancement: 19, durability: 80} );
        })

        it('If the item\'s enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).'
        , () => {
            expect(enhancer.fail(item2)).toEqual({name: "sword", enhancement: 19, durability: 80} );
        })

        it('If the item\'s enhancement level is 15 or 16, durability -10, enhancement unchanged'
        , () => {
            expect(enhancer.fail(item4)).toEqual({name: "sword", enhancement: 15, durability: 80} );
            expect(enhancer.fail(item5)).toEqual({name: "sword", enhancement: 16, durability: 80} );
        })
    });
})