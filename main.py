class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
@namespace
class SpriteKind:
    NPC = SpriteKind.create()
    d3hand = SpriteKind.create()

def on_up_pressed():
    global Controlrldu
    animation.run_image_animation(Mranimal_2D,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    Controlrldu = 3
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def Random():
    global Dog
    Dog = sprites.create(img("""
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
        """),
        SpriteKind.NPC)
    tiles.place_on_random_tile(Dog, sprites.castle.tile_path5)
    for value in tiles.get_tiles_by_type(sprites.castle.tile_path5):
        tiles.set_tile_at(value, sprites.castle.tile_path5)

def on_on_overlap(sprite, otherSprite):
    global collide
    Mranimal_2D.set_position(72, 54)
    collide = 1
    if Render.is_view_mode(ViewMode.RAYCASTING_VIEW):
        Render.set_view_mode(ViewMode.TILEMAP_VIEW)
    else:
        Render.set_view_mode(ViewMode.RAYCASTING_VIEW)
sprites.on_overlap(SpriteKind.player, SpriteKind.NPC, on_on_overlap)

def on_left_pressed():
    global Controlrldu
    animation.run_image_animation(Mranimal_2D,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    Controlrldu = 2
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    global Controlrldu
    animation.run_image_animation(Mranimal_2D,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    Controlrldu = 1
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global Controlrldu
    animation.run_image_animation(Mranimal_2D,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
    Controlrldu = 0
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def random_cat():
    global cat
    cat = sprites.create(img("""
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
        """),
        SpriteKind.NPC)
    tiles.place_on_random_tile(cat, sprites.castle.tile_path5)
    for value2 in tiles.get_tiles_by_type(sprites.castle.tile_path5):
        tiles.set_tile_at(value2, sprites.castle.tile_path5)
def random_monkey():
    global monkey
    monkey = sprites.create(img("""
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
        """),
        SpriteKind.NPC)
    tiles.place_on_random_tile(monkey, sprites.castle.tile_path5)
    for value3 in tiles.get_tiles_by_type(sprites.castle.tile_path5):
        tiles.set_tile_at(value3, sprites.castle.tile_path5)
mode_dimensions = 0
moving = False
monkey: Sprite = None
cat: Sprite = None
collide = 0
Dog: Sprite = None
Controlrldu = 0
Mranimal_2D: Sprite = None
game.set_dialog_frame(img("""
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
"""))
game.show_long_text("hello and welcome to wildlife warriors so in this game you have to find and catch some animals to keep them in a safe place.",
    DialogLayout.FULL)
game.show_long_text("Controls:                         press the arrow keys to move",
    DialogLayout.FULL)
game.show_long_text("A game made by Piyush Makhijani", DialogLayout.FULL)
Render.set_view_mode(ViewMode.TILEMAP_VIEW)
tiles.set_current_tilemap(tilemap("""
    level0
"""))
random_monkey()
random_cat()
Random()
# Create the sprite
Mranimal_2D = sprites.create(img("""
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
    """),
    SpriteKind.player)
Mranimal_2D.set_position(72, 54)

def on_on_update():
    pass
game.on_update(on_on_update)

def on_on_update2():
    global moving, collide
    moving = controller.left.is_pressed() or (controller.up.is_pressed() or (controller.right.is_pressed() or controller.down.is_pressed()))
    if not (moving):
        animation.stop_animation(animation.AnimationTypes.ALL, Mranimal_2D)
        if Controlrldu == 0:
            Mranimal_2D.set_image(img("""
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
            """))
        else:
            if Controlrldu == 1:
                Mranimal_2D.set_image(img("""
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
                """))
            else:
                if Controlrldu == 2:
                    Mranimal_2D.set_image(img("""
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
                    """))
                else:
                    Mranimal_2D.set_image(img("""
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
                    """))
    if collide == 1:
        tiles.set_current_tilemap(tilemap("""
            level0
        """))
        sprites.destroy(Mranimal_2D)
        collide = 0
game.on_update(on_on_update2)

def on_forever():
    global mode_dimensions
    controller.move_sprite(Mranimal_2D, 100, 100)
    scene.camera_follow_sprite(Mranimal_2D)
    if collide == 1:
        game.splash("Press 'A' to start animal rescue")
    if Render.is_view_mode(ViewMode.RAYCASTING_VIEW):
        mode_dimensions = 3
    else:
        mode_dimensions = 2
forever(on_forever)
