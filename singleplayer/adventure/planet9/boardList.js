var boards = [
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,2,2,2,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,1,1,2,2,2,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2],
        [2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2],
        [2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,2,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2],
        [2,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2],
        [2,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
        [2,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
        [2,1,1,1,1,2,2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,2],
        [2,1,1,1,1,2,2,2,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,2],
        [2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,2,2,2],
        [2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,2,2,2],
        [2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,2,1,1,1,2,2],
        [2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,2,2,1,2,2,2,1,1,2,2,1,1,1,1,1,1,0,1,1,2],
        [2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,2,2,2,2,1,1,1,2,1,1,1,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,2,2,2,1,2,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,2,1,0,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,2,2,2,1,2,1,1,1,2,2,2,2,2,2,1,1,2],
        [2,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,2,2,2,1,2,2,2,2,1,1,1,1,2,2,1,2,2,2,2,2,2,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,2,2,2,2,1,1,2,1,1,2,2,1,1,1,2,2,2,1,2,2,2,1,1,1,1,2,2,2,2,1,1,1,1,1,1,2],
        [2,1,1,1,2,2,1,1,1,2,2,2,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,2,2,1,2,2,1,2,2,2,2,1,1,2,2,2,2,2],
        [2,2,1,1,1,2,2,1,1,2,2,2,1,1,1,2,2,2,2,1,1,1,1,2,2,2,1,2,2,1,1,2,1,1,2,2,2,1,1,1,1,1,1,2],
        [2,2,2,1,1,1,2,2,1,1,2,2,2,1,1,1,2,2,2,2,2,2,1,2,1,2,1,1,1,2,1,2,2,1,1,1,2,1,1,1,1,1,1,2],
        [2,2,2,2,1,1,2,2,2,1,1,2,2,2,1,1,2,2,2,2,2,2,1,1,1,2,1,2,1,2,1,2,2,1,2,1,2,2,2,2,2,1,1,2],
        [2,2,2,2,2,1,2,2,2,2,1,1,2,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,1,2,1,1,2,1,1,1,2,2,2,2,2,1,1,2],
        [2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,1,1,1,1,2,1,2,2,1,2,2,2,2,2,2,2,2,2,1,1,2],
        [2,2,2,2,1,1,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,1,2,2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,1,1,2,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,1,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,1,1,2,2,2,2,2,2,2,1,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2],
        [2,2,1,1,1,1,1,1,1,2,2,1,2,1,2,1,1,2,2,2,2,2,2,1,1,1,1,2,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,2,1,2,2,2,2,1,2,2,1,2,1,2,1,1,1,2,2,2,2,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,1,1,2,2,2,2,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,2,2,2,2,2,1,2],
        [2,2,1,1,2,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,1,2,1,1,2,2,2,2,2,1,1,1,1,1,1,2,1,2],
        [2,2,2,2,2,1,1,2,1,2,2,1,1,2,2,2,2,2,1,1,1,1,2,2,2,2,1,2,1,1,1,2,2,2,2,1,1,2,2,2,1,1,1,2],
        [2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,1,1,1,2,2,2,1,1,2,2,2,2,2,2,2],
        [2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,1,1,2,2,2,1,1,2,2,2,2,2,2,2],
        [2,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,1,1,1,2,2,1,1,2,1,1,1,1,1,2],
        [2,2,2,1,1,1,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1,1,2,2,1,1,2,1,1,1,1,1,2],
        [2,2,1,1,1,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1,1,1,2,1,1,1,1,1,2,1,1,2],
        [2,2,1,1,1,2,2,2,2,2,1,1,2,2,1,1,1,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,1,1,1,2,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,2,1,1,1,2,2,1,1,1,1,1,2,1,1,2,1,2,1,1,2,2,1,1,2,1,1,1,2,1,1,2,1,1,1,1,1,2],
        [2,2,2,2,1,2,1,1,1,2,1,1,1,1,2,1,2,2,1,1,2,1,1,1,1,2,1,1,2,1,1,1,2,1,1,1,2,2,1,2,2,2,1,2],
        [2,1,1,2,1,2,2,2,1,1,2,1,1,2,2,1,1,1,1,2,2,2,2,1,2,2,1,2,1,2,2,1,1,2,2,2,2,1,1,2,1,2,1,2],
        [2,2,1,1,1,2,1,2,2,1,2,2,2,1,1,1,2,2,1,2,1,1,2,1,1,1,1,2,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,2],
        [2,1,1,2,1,1,1,2,2,1,2,2,2,2,2,1,2,2,1,1,1,2,2,1,2,2,2,1,2,1,2,2,1,1,1,2,1,2,2,2,2,2,2,2],
        [2,1,2,1,2,1,2,1,1,2,2,2,2,1,2,1,1,2,1,2,2,1,2,1,1,2,1,1,2,1,1,2,1,2,1,1,2,1,1,1,1,2,1,2],
        [2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,2,2,2,1,1,2,1,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1,1,2,2,1,2,1,2],
        [2,1,1,2,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,2,2,1,2,2,2,2,2,2,1,2,1,2,1,1,1,1,1,2],
        [2,1,2,1,1,2,1,1,1,1,2,1,1,2,1,1,2,1,1,1,2,1,2,1,2,2,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,2,2],
        [2,1,2,1,2,1,1,2,2,2,1,1,2,1,1,2,1,2,2,1,1,2,1,1,1,2,2,2,2,1,2,2,1,2,1,2,1,2,2,1,1,1,1,2],
        [2,1,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,1,2,1,2,1,2,1,1,1,2,1,2,2],
        [2,2,1,1,2,2,1,2,2,2,1,1,2,1,1,1,2,2,1,2,1,1,1,2,2,2,1,1,1,1,2,1,1,1,1,1,2,2,2,2,2,1,1,2],
        [2,1,2,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,1,2,1,1,2,2,1,2,1,2,2,1,2,2,1,1,1,1,1,2,1,2],
        [2,1,1,1,2,1,2,2,2,1,2,1,1,1,2,2,1,2,2,2,2,2,2,1,1,2,2,1,1,2,1,1,1,1,2,1,1,2,1,2,1,2,1,2],
        [2,2,1,2,1,1,2,2,1,1,2,1,2,2,1,2,1,2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,2,1,1,2,1,2,0,2,2,1,2],
        [2,2,1,1,1,2,1,2,2,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,2,1,2,2,2,2,1,1,1,2,2,2,1,1,2,1,2,2,1,2],
        [2,2,2,2,2,2,1,2,1,2,1,1,1,2,1,2,2,2,1,1,1,2,2,2,2,1,1,1,1,2,2,2,1,2,1,1,1,2,2,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2,1,2,1,2,2,1,1,2,2,1,2,1,2,1,1,1,2,2,1,2,1,1,2,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,2,2,1,2,2,2,2,1,1,2,2,1,1,2,1,1,1,1,1,1,2,1,2,2,1,2,1,1,1,2,2,1,2,1,2,1,2,1,2,2,1,2],
        [2,1,1,2,1,2,2,1,1,1,2,1,1,1,2,1,1,2,2,2,1,2,2,1,2,1,1,1,2,2,1,1,1,1,2,1,1,2,1,2,1,1,1,2],
        [2,2,1,2,1,1,2,1,2,1,2,1,2,2,2,2,1,1,1,2,1,1,1,2,2,1,2,2,1,2,1,2,2,2,1,2,0,1,2,1,1,2,2,2],
        [2,1,1,1,2,1,1,2,2,1,2,1,1,2,1,2,1,2,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,2,1,1,2],
        [2,1,2,1,1,2,1,1,1,1,2,2,1,1,1,2,1,1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,2,1,1,1,2,1,2],
        [2,1,1,2,1,2,2,2,2,1,2,1,1,2,1,1,2,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2,2,2,1,1,1,2,1,1,2],
        [2,2,1,2,1,1,1,1,2,2,2,1,2,2,2,1,1,1,2,2,2,1,2,1,2,1,2,1,2,1,2,1,2,2,1,1,1,1,2,2,1,1,2,2],
        [2,1,1,2,2,2,2,1,2,1,1,1,2,2,2,1,2,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,1,1,2,2,1,1,1,2,1,1,2],
        [2,1,2,1,1,1,1,2,1,1,2,1,2,1,1,2,1,2,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,2,2,1,1,2,1,2,1,2,1,2],
        [2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,2,2,2,2,2,1,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,2,2,1,2,1,1,1,2,2,1,1,1,1,2,1,1,2,2,2,2,2,2,2],
        [2,1,1,1,2,1,1,1,2,1,2,2,2,1,2,2,1,2,2,1,1,1,2,1,2,2,2,2,2,1,2,2,1,2,1,2,1,1,1,1,1,1,1,2],
        [2,1,2,2,2,2,2,1,2,1,1,2,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,2,2,2,1,2,2,2,2,2,2,2,1,2],
        [2,1,1,1,1,2,1,1,1,2,1,2,1,2,2,1,2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,1,1,2,1,1,1,1,1,2,1,2],
        [2,1,2,2,1,1,1,2,1,2,1,2,1,1,1,1,2,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,1,2,2,2,2,2,2,1,2,1,2],
        [2,1,2,2,1,2,1,1,1,1,1,2,2,1,2,2,2,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,2,2,1,1,1,1,1,1,2,1,2],
        [2,1,1,1,1,1,2,2,2,1,2,2,2,2,2,1,1,1,1,2,1,1,1,2,1,1,2,1,2,2,1,1,1,1,1,1,2,2,2,2,2,2,1,2],
        [2,1,2,1,2,1,2,2,1,1,1,1,2,1,2,1,2,2,2,2,1,2,2,2,2,1,1,2,2,1,1,2,2,2,2,1,2,1,1,1,1,1,1,2],
        [2,1,2,1,2,1,1,1,1,2,2,1,2,1,1,1,2,1,2,2,1,2,1,2,1,1,2,1,1,2,2,1,1,1,1,1,2,1,2,2,2,2,1,2],
        [2,1,2,1,1,1,2,1,2,2,1,1,1,2,2,2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,2,2,2,2,2,1,1,1,1,2,1,2],
        [2,1,2,2,1,2,2,1,2,1,1,2,1,1,2,1,1,2,2,1,2,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,1,2,2,1,2],
        [2,1,1,1,1,1,1,1,2,1,1,1,2,1,2,2,1,2,1,1,2,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,1,2,1,2],
        [2,2,1,2,1,2,1,2,2,1,1,2,1,2,1,1,1,2,2,2,2,1,2,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1,1,2,1,1,2],
        [2,2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1,1,1,1,1,2,1,2,2,1,2,2,2,2,1,2,2,1,2,2,2,1,2,2,2],
        [2,1,1,2,2,2,1,1,2,2,2,2,1,2,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,1,1,1,2,1,2,1,1,1,0,2,1,1,1,2],
        [2,1,2,2,2,2,2,1,2,1,1,2,1,1,2,1,1,1,1,1,2,1,1,2,2,1,2,1,2,2,1,2,2,1,2,1,1,1,2,2,1,1,1,2],
        [2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,2,1,2,2,1,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,2],
        [2,1,2,1,2,1,2,2,2,2,2,1,1,2,1,2,1,1,1,2,2,1,1,2,1,2,1,2,1,1,2,2,1,2,1,1,2,2,1,1,2,2,1,2],
        [2,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,2,1,2,1,2,2,1,2,2,2,2,1,2,1,1,2,2,1,2,1,1,1,2,1,1,2,1,2],
        [2,2,1,1,1,2,1,2,1,2,2,1,2,2,1,2,2,2,1,1,1,2,1,1,1,2,2,1,1,2,1,1,2,1,1,1,2,1,2,1,2,1,1,2],
        [2,2,2,2,1,2,1,2,2,2,2,1,2,2,1,2,1,1,1,2,1,2,2,2,2,2,2,1,1,1,1,2,1,2,2,1,2,1,2,1,2,1,2,2],
        [2,1,2,2,1,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,1,2,1,1,1,2,1,1,2,2,1,1,1,1,2,2,1,1,2,1,2,1,1,2],
        [2,1,2,1,1,2,2,1,1,2,1,2,2,1,1,2,2,2,2,1,1,1,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,1,2,1,1,2,1,2],
        [2,1,1,1,2,2,1,2,1,2,1,2,2,2,1,1,1,1,1,2,1,2,2,1,1,2,1,2,2,1,2,1,1,1,2,1,1,2,2,2,1,1,1,2],
        [2,2,1,2,2,1,1,2,2,1,1,2,1,1,2,2,1,1,1,2,2,1,1,1,2,2,1,1,2,1,1,2,2,2,1,1,2,2,1,2,2,2,1,2],
        [2,1,1,1,2,2,1,1,1,2,1,2,2,1,1,1,2,1,1,2,2,2,1,2,2,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,2],
        [2,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,2,2,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,2,1,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,2,2,1,1,1,1,2],
        [2,1,2,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,2,2,2,2,1,2,1,2,2,1,1,2,1,2,1,2,2,2,1,1,2,1,2,2,1,2],
        [2,1,1,2,1,2,1,1,1,2,2,2,2,1,2,1,1,1,2,1,1,1,2,2,1,1,2,2,1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,2],
        [2,1,2,1,2,1,2,2,2,1,1,1,1,2,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,2,2,1,1,1,2,1,2,1,1,1,2,1,1,2],
        [2,1,2,1,1,1,1,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,2,2,2,2,2,1,2,2],
        [2,1,2,2,2,1,2,1,2,2,1,1,1,2,1,2,1,2,1,2,2,2,2,1,2,2,2,2,1,2,1,1,1,2,2,2,2,1,1,1,2,1,1,2],
        [2,1,1,1,1,1,2,1,2,1,1,2,1,2,1,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,2,1,1,1,2,1,2,1,2,2,2,2],
        [2,1,1,2,2,1,1,2,1,1,2,2,2,1,2,1,1,1,2,1,1,2,2,1,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,1,1,1,2],
        [2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,2,1,1,2,1,1,1,2,1,2,2,1,1,2,1,2,2,1,1,2,2,1,2,1,2],
        [2,2,1,1,2,2,2,1,2,1,1,2,2,2,2,1,1,1,2,1,2,2,2,1,2,1,2,1,2,2,1,1,1,1,2,1,1,2,1,2,1,1,1,2],
        [2,1,1,2,1,1,2,1,2,1,2,1,1,1,2,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,2],
        [2,1,2,2,1,2,1,2,1,1,2,1,2,1,1,1,1,2,2,1,2,2,2,1,2,2,2,2,2,1,2,2,1,1,2,1,1,2,1,1,1,1,2,2],
        [2,1,1,1,1,2,1,2,1,2,2,1,2,1,2,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,1,1,2,2,1,2,2,1,1,2],
        [2,1,2,1,2,2,1,1,1,2,1,1,2,1,2,1,2,2,1,1,1,1,2,1,2,2,2,1,2,2,2,1,2,1,2,1,2,1,1,1,2,2,1,2],
        [2,1,2,2,2,2,1,2,2,1,1,2,2,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,2,1,2,2,1,2,1,2],
        [2,2,1,1,1,2,1,2,1,2,1,1,1,1,1,1,2,1,1,2,2,2,2,1,2,2,1,2,2,1,1,2,1,1,1,1,2,1,2,1,1,1,2,2],
        [2,1,1,2,1,1,1,2,1,1,2,2,1,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,2,1,1,2,2,1,2,2,2],
        [2,1,2,1,2,2,2,1,1,1,1,2,1,2,2,2,2,2,1,2,2,1,2,2,2,1,2,1,1,1,2,2,2,1,1,1,2,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,2,1,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,2,1,1,2,1,1,2,2,1,2,2,1,2],
        [2,1,1,2,2,2,2,2,2,1,2,1,1,1,1,2,1,2,2,1,2,2,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,1,2],
        [2,2,1,2,1,1,1,1,1,1,2,2,2,2,2,2,1,2,2,1,2,1,2,2,2,1,1,1,2,1,1,1,2,2,2,1,2,1,1,2,2,1,2,2],
        [2,1,1,2,1,2,1,2,2,1,1,1,1,1,2,1,2,2,1,1,2,1,2,1,1,2,2,1,1,2,2,1,1,1,1,1,2,2,1,1,1,1,2,2],
        [2,1,2,1,2,2,1,2,2,1,2,2,2,2,1,1,1,1,2,1,1,1,2,2,1,1,1,2,2,1,1,1,1,2,2,1,2,2,2,2,2,1,1,2],
        [2,1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,2,2,2,2,2,1,1,1,1,2,1,2,1,1,2,2,2,1,1,2,2,1,1,1,1,2,1,2],
        [2,2,2,2,2,1,1,2,1,2,1,1,1,2,2,1,1,1,2,1,2,1,2,2,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2,1,2,1,2],
        [2,1,1,1,1,1,2,2,1,1,1,2,1,2,1,1,2,1,1,1,2,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,3,2,1,2,1,2],
        [2,1,2,2,2,2,2,2,2,2,2,1,2,1,1,2,1,2,1,2,1,1,1,2,2,2,2,1,1,1,2,1,2,2,1,2,1,2,2,2,1,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ]
]

var coords_begin = [
    [1,2],
    [2,2],
    [16,19],
    [3,3],
    [5,5],
]

var coords_begin_ghost = [
    [21,20],
    [1,9],
    [11,8],
    [4,8],
    [16,16],
]