namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const d3hand = SpriteKind.create()
    export const PET = SpriteKind.create()
    export const backy = SpriteKind.create()
}
function random_monkey () {
    monkey = sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(monkey, sprites.castle.tilePath5)
    for (let value3 of tiles.getTilesByType(sprites.castle.tilePath5)) {
        tiles.setTileAt(value3, sprites.castle.tilePath5)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mranimal_2D,
    [img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . . f f c c c c c c f f . 
        . f f f c c c c c c c f f 
        f f f c c c c c c c c c f 
        f f c c c f c c c c c c f 
        . f f f f f c c c f c f f 
        . f f f f c c f f c f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f e . 
        . f e f f f f f f f f e . 
        . e 4 4 e 7 7 7 7 7 c 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    true
    )
    Controlrldu = 3
    animation.runImageAnimation(
    PET,
    assets.animation`MUSHU2`,
    100,
    true
    )
})
function Random () {
    Dog = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(Dog, sprites.castle.tilePath5)
    for (let value of tiles.getTilesByType(sprites.castle.tilePath5)) {
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    Mranimal_2D.setPosition(72, 54)
    collide = 1
    if (Render.isViewMode(ViewMode.raycastingView)) {
        Mranimal_2D = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Player)
        Render.setViewMode(ViewMode.tilemapView)
    } else {
        Render.setViewMode(ViewMode.raycastingView)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mranimal_2D,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    true
    )
    Controlrldu = 2
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mranimal_2D,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    true
    )
    Controlrldu = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PET, function (sprite, otherSprite) {
    if (pet_follow == 0) {
        sprites.destroy(Mranimal_2D)
        sprites.destroy(PET)
        PET = sprites.create(img`
            . . . . b b b b . . . . . . . . 
            . . . b 3 3 3 3 b b b b . . . . 
            . . b b 3 3 3 3 3 1 1 b b c c . 
            . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
            . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
            . . c 3 3 3 3 3 3 3 c c c b b f 
            . c 3 3 3 3 3 b b b b c c c b f 
            c 3 3 3 3 b b d d d d d c c b f 
            c 3 3 c b d d d d d d c d c c . 
            f 3 c c c d d c d d d c d b c . 
            f b c c c d d d c d d d d d f . 
            f b c c c d d d d d b b b d f . 
            f f b b c b d d d d d d d c . . 
            . f f f f b c c d d d d f f . . 
            . . f b d d b c c f f b b f f . 
            . . f d d d b . . f f b b b f . 
            `, SpriteKind.PET)
        Mranimal_2D = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Player)
        Mranimal_2D.setPosition(72, 54)
        PET.setPosition(88, 18)
        pet_follow = 1
        PET.setBounceOnWall(true)
        game.setDialogFrame(img`
            ..................................................................
            .....888..888........................................888..888.....
            ...68777887778.66666.........6666666.........666666.87778877786...
            ..68777777777786999666.....66699999666.....666999968777777777786..
            ..687887777887899999966...6699999999966...6699999998788777788786..
            ..66788777788769999999666669999999999966666999999996788777788766..
            ..67777777777776999999999999999999999999999999999967777777777776..
            ..633777777773366999999999999999999999999999999996633777777773366.
            .6733776666773376999999999999999999999999999999996733776666773376.
            .677776dddd67777699999999999999999999999999999999677776dddd677776.
            .6d666dddddd666d6999999999999999999999999999999996d666dddddd666d6.
            .6dddddddddddddd6999999999999999999999999999999996dddddddddddddd6.
            ..6dddddddddddd699999999999999999999999999999999996dddddddddddd6..
            ...666666666666999999999999999999999999999999999999666666666666...
            ...699999999999999999999999999999999999999999999999999999999996...
            ..66999999999999999999999999999999999999999999999999999999999966..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999966..
            ..6699999999999999999999999999999999999999999999999999999999996...
            ...699999999999999999999999999999999999999999999999999999999966...
            ...66999999999999999999999999999999999999999999999999999999966....
            ....669999999999999999999999999999999999999999999999999999996.....
            .....69999999999999999999999999999999999999999999999999999996.....
            .....69999999999999999999999999999999999999999999999999999996.....
            .....699999999999999999999999999999999999999999999999999999966....
            ....66999999999999999999999999999999999999999999999999999999966...
            ...669999999999999999999999999999999999999999999999999999999996...
            ...6999999999999999999999999999999999999999999999999999999999966..
            ..66999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999966..
            ..6699999999999999999999999999999999999999999999999999999999996...
            ...699999999999999999999999999999999999999999999999999999999966...
            ...66999999999999999999999999999999999999999999999999999999966....
            ....669999999999999999999999999999999999999999999999999999996.....
            .....69999999999999999999999999999999999999999999999999999996.....
            .....69999999999999999999999999999999999999999999999999999996.....
            .....699999999999999999999999999999999999999999999999999999966....
            ....66999999999999999999999999999999999999999999999999999999966...
            ...669999999999999999999999999999999999999999999999999999999996...
            ...6999999999999999999999999999999999999999999999999999999999966..
            ..66999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..69999999999999999999999999999999999999999999999999999999999996..
            ..66999999999999999999999999999999999999999999999999999999999966..
            ...699999999999999999999999999999999999999999999999999999999996...
            ...668889988899999999999999999999999999999999999999998889988866...
            ....8777887778999999999999999999999999999999999999998777887778....
            ...877777777778999999999999999999999999999999999999877777777778...
            ...878877778878999999999999999999999999999999999999878877778878...
            ...678877778876999999999999999999999999999999999999678877778876...
            ..67777777777776999999999999999999999999999999999967777777777776..
            ..633777777773366999999999999999999999999999999996633777777773366.
            .6733776666773376999999999999999999999999999999996733776666773376.
            .677776dddd67777699999966666999999999996666699999677776dddd677776.
            .6d666dddddd666d69999966...6699999999966...6699996d666dddddd666d6.
            .6dddddddddddddd6999666.....66699999666.....666996dddddddddddddd6.
            ..6dddddddddddd666666.........6666666.........66666dddddddddddd6..
            ...666666666666....................................666666666666...
            ..................................................................
            `)
        game.showLongText("You got an pet", DialogLayout.Full)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.backy, function (sprite, otherSprite) {
    game.setDialogFrame(img`
        ..ccccc....333.....333...ccccc...
        .c33b33c..39993...39993.c33b33c..
        c3b33bb3c39999933399999c3bb33b3c.
        c33b33b3c99111999991119c3b33b33c.
        cb33b33bc91999199919991cb33b33bc.
        c3b33bbbcb999991119999bcbbb33b3c.
        c3bb3bbd1b111119991111b1dbb3bb3c.
        .c33bbd1b11111111111111b1dbb33c..
        ..cccc1b1111111111111111b1cccc...
        .3991bb111111111111111111bb993...
        3991991111111111111111111191993..
        39919911111111111111111111991993.
        39919911111111111111111111991993.
        .3991911111111111111111111991993.
        ..39919111111111111111111191993..
        ..3991911111111111111111191993...
        ..3991911111111111111111191993...
        .39919111111111111111111191993...
        3991991111111111111111111191993..
        39919911111111111111111111991993.
        39919911111111111111111111991993.
        .3991911111111111111111111991993.
        ..699bb111111111111111111bb1993..
        ..cccc1b1111111111111111b1cccc...
        .c33bbd1b11111111111111b1dbb33c..
        c3bb3bbd1b111199911111b1dbb3bb3c.
        c3b33bbbcb999911199999bcbbb33b3c.
        cb33b33bc19991999199919cb33b33bc.
        c33b33b3c91119999911199c3b33b33c.
        c3b33bb3c99999333999993c3bb33b3c.
        .c33b33c.39993...39993..c33b33c..
        ..ccccc...333.....333....ccccc...
        .................................
        `)
    sprites.destroy(ducky)
    game.showLongText("You found ducky", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`level0`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mranimal_2D,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f c f f f f f f . . 
        c f f f c c f f f f f f f 
        c f f f f f f f c f f f f 
        c c f f e e f f f c c c . 
        f c c f f e e f f f f f . 
        f f f b f e e f b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        e f e e 4 4 4 4 4 e f . . 
        e 4 4 4 e 7 7 7 b f e f . 
        . e 4 4 e 7 7 7 7 f 4 e . 
        . . e e 6 6 6 6 6 f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    true
    )
    Controlrldu = 0
    animation.runImageAnimation(
    PET,
    assets.animation`hand with net`,
    500,
    true
    )
})
function spawn_my_pet () {
    pet_follow = 0
    PET = sprites.create(img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `, SpriteKind.PET)
    tiles.placeOnRandomTile(PET, assets.tile`myTile20`)
}
function random_cat () {
    cat = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.NPC)
    tiles.placeOnRandomTile(cat, sprites.castle.tilePath5)
    for (let value2 of tiles.getTilesByType(sprites.castle.tilePath5)) {
        tiles.setTileAt(value2, sprites.castle.tilePath5)
    }
}
let moving = false
let mode_dimensions = 0
let cat: Sprite = null
let ducky: Sprite = null
let pet_follow = 0
let collide = 0
let Dog: Sprite = null
let PET: Sprite = null
let Controlrldu = 0
let monkey: Sprite = null
let Mranimal_2D: Sprite = null
// Create the sprite
Mranimal_2D = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
Mranimal_2D.setPosition(72, 54)
Render.setViewMode(ViewMode.tilemapView)
game.setDialogFrame(img`
    8888.....88....888....88.88....888....888...8888
    867788..8768..86768..8678768..86768..8678.887768
    8767768.8777886767688777877788676768877788677678
    877677686767787767787767676778776778776786776778
    .8778766677678776778767767767877677876778678778.
    .8677866867668676768667686766867676866766687768.
    ..86668688676886868867688867688686886768686668..
    .888666888888888888888888888888888888888866688..
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87768866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87766866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    ..886668888888888888888888888888888888888666888.
    ..86668686768868688676888676886868867688686668..
    .8677866676686767686676867668676768667686687768.
    .8778768776787767787677677678776778767766678778.
    877677687677877677877676767787767787767686776778
    8767768877788676768877787778867676887778.8677678
    867788.8768..86768..8678768..86768..8678..887768
    8888...888....888....88.88....888....88.....8888
    `)
game.showLongText("hello and welcome to wildlife warriors so in this game you have to find and catch some animals to keep them in a safe place.", DialogLayout.Full)
game.showLongText("Controls:                         press the arrow keys to move how to play: you need to find an animal in 2d and interact with it and then try to find it in 3d", DialogLayout.Full)
game.showLongText("A game made by Piyush Makhijani and Raghav Goyal", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level0`)
random_monkey()
random_cat()
Random()
spawn_my_pet()
game.onUpdate(function () {
    if (Mranimal_2D.tileKindAt(TileDirection.Left, assets.tile`myTile1`)) {
        tiles.setCurrentTilemap(tilemap`level10`)
        PET.setPosition(130, 22)
        Mranimal_2D.setPosition(117, 63)
        mode_dimensions = 4
        ducky = sprites.create(assets.image`BANG BRO`, SpriteKind.backy)
        ducky.setPosition(33, 53)
    }
})
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.up.isPressed() || (controller.right.isPressed() || controller.down.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Mranimal_2D)
        if (Controlrldu == 0) {
            Mranimal_2D.setImage(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `)
        } else if (Controlrldu == 1) {
            Mranimal_2D.setImage(img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `)
        } else if (Controlrldu == 2) {
            Mranimal_2D.setImage(img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `)
        } else {
            Mranimal_2D.setImage(img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `)
        }
    }
    if (collide == 1) {
        tiles.setCurrentTilemap(tilemap`level0`)
        sprites.destroy(Mranimal_2D)
        collide = 0
    }
})
forever(function () {
    controller.moveSprite(Mranimal_2D, 100, 100)
    scene.cameraFollowSprite(Mranimal_2D)
    if (collide == 1) {
        game.splash("Press 'A' to start animal rescue")
    }
    if (Render.isViewMode(ViewMode.raycastingView)) {
        mode_dimensions = 3
    } else {
        mode_dimensions = 2
    }
    if (pet_follow == 1) {
        PET.follow(Mranimal_2D, 80)
    }
})
