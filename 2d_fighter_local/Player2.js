const player2 = new Sprite({
    position: {
        x: 300,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    dim: {
        width: 50,
        height: 150
    },
    colour: "red",
    offset: {
        x: -25,
        y: 0
    },
    attackset: {
        //grounded
        neutral: {
            damage: 10,
            knockback: 10,
            time: 20
        },
        forward: {
            damage: 15,
            knockback: 10,
            time: 20
        },
        upward: {
            damage: 10,
            knockback: 20,
            time: 20
        },
        //aerial
        neutral_air: {
            damage: 10,
            knockback: 10,
            time: 20
        },
        forward_air: {
            damage: 15,
            knockback: 10,
            time: 20
        },
        backward_air: {
            damage: 10,
            knockback: 10,
            time: 20
        },
        upward_air: {
            damage: 10,
            knockback: 20,
            time: 20
        },
        downward_air: {
            damage: 10,
            knockback: 20,
            time: 20
        }
    }
});