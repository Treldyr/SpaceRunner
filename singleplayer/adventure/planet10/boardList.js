var boards = [
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,2,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,2,2],
        [2,2,1,1,1,1,1,2,1,2,2,1,1,1,1,1,1,2,2,2,1,1,1,1,2,2,2,2,1,1,1,2,1,2,1,1,1,1,1,1,2,1,2,2],
        [2,1,1,1,1,2,1,1,1,1,1,2,2,2,1,2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,2,1,1,2,1,2,2,2,1,2,2,2,1,2,2,1,1,1,1,2,1,2,1,2,1,2],
        [2,1,2,1,1,1,2,1,1,1,2,2,2,1,2,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,2,1,2,1,1,2,1,1,1,1,2],
        [2,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,1,2,2,1,1,1,2,1,1,2,1,1,1,1,2,1,1,1,1,1,1,2,2],
        [2,1,1,2,1,1,1,2,1,2,2,1,2,1,2,2,2,1,1,2,1,2,1,1,1,2,1,1,2,2,1,1,2,1,2,2,2,2,2,1,2,1,1,2],
        [2,1,1,2,1,1,2,1,1,1,2,1,2,1,1,1,1,1,2,2,1,2,1,2,2,1,2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,1,1,1,1,1,1,2,2,1,1,1,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2,2,1,1,1,2,2,2,2,1,1,1,1,1,1,2],
        [2,1,1,1,2,1,2,2,2,1,1,1,1,1,1,2,2,1,1,2,1,1,2,2,1,2,2,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2],
        [2,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,2,1,1,2,1,2,1,2,1,1,2,1,2,2,2,2,1,2,1,1,2,1,1,1,1,2],
        [2,1,1,2,1,1,2,2,1,2,2,2,1,1,2,1,2,1,2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2],
        [2,2,1,2,2,1,2,1,1,1,1,1,2,2,1,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,1,1,2,2,1,2,2],
        [2,1,1,1,2,1,1,2,1,1,2,1,1,1,1,2,1,1,2,1,2,1,1,1,1,2,2,2,1,1,2,2,1,1,2,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,1,2,1,1,1,1,2,2,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,0,1,2],
        [2,1,1,1,2,1,1,1,2,1,2,2,1,1,1,2,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,1,2,1,1,1,2],
        [2,2,1,2,2,1,1,2,1,1,1,1,1,2,2,2,1,1,2,1,1,1,1,1,2,2,2,1,1,2,1,1,1,2,1,1,1,1,1,2,2,1,2,2],
        [2,1,1,2,1,1,1,2,2,2,1,2,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,2,1,2,2,1,2,2,2,2,2,1,1,1,1,1,2],
        [2,1,2,1,1,2,2,1,1,1,2,1,1,1,2,2,2,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,2],
        [2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,2,1,1,2,2,1,2,1,2,2,1,1,2,1,1,2,2,1,2,1,1,1,1,1,2],
        [2,2,2,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2],
        [2,1,1,2,2,1,1,1,1,1,2,2,1,2,1,1,2,1,1,1,2,1,2,1,2,2,2,1,2,2,1,2,1,2,1,2,2,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,2,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,2,1,2,1,1,1,2,2,1,1,2,1,2,1,1,2],
        [2,1,2,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,2,2,2,1,1,1,2,1,2,2,1,1,2,2,1,1,1,1,2,2],
        [2,2,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,2,1,2,1,1,2,1,1,2,1,2,1,1,2],
        [2,1,1,1,2,1,1,2,1,1,2,2,1,1,1,1,1,2,2,2,1,2,1,2,1,2,1,1,1,2,2,1,2,1,1,1,1,1,1,1,1,2,1,2],
        [2,1,2,1,1,2,1,2,2,1,1,1,1,2,2,1,2,2,1,1,1,2,1,2,1,1,2,2,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,2,1,2,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,2,1,2,2,2,2,2,2,1,2,1,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,2,2,1,1,2,1,2,2,2,2,2,2,2,2,2,2,1,2,1,2,1,2],
        [2,1,1,1,2,2,2,2,1,2,2,2,1,2,1,2,2,2,2,2,2,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2],
        [2,2,1,2,2,2,1,1,1,1,1,2,1,2,1,2,1,1,1,2,1,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1,2,1,2],
        [2,1,1,1,1,2,1,2,2,2,1,2,1,2,1,1,1,2,1,2,1,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,2],
        [2,1,1,2,1,1,1,1,1,2,1,1,1,2,2,1,2,2,2,2,1,2,2,1,2,2,2,2,1,2,2,2,1,2,2,2,2,2,1,1,1,2,1,2],
        [2,2,1,2,2,2,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,2,2,2,2,2,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2,2,1,2,2,2,2,2,2],
        [2,1,1,1,2,1,2,1,1,2,1,2,1,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,1,2,1,2,2,2,1,2,1,1,1,1,1,1,1,2],
        [2,1,2,1,2,1,2,2,2,2,1,2,1,2,2,2,2,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,2,1,1,2,2,1,2],
        [2,1,2,1,1,1,2,1,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,1,2],
        [2,1,2,1,2,2,2,2,1,2,1,2,1,2,1,2,1,2,2,2,2,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,2,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2],
        [2,1,2,2,2,2,2,2,2,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,1,1,2,2,2,2,1,1,1,2,1,2,2,1,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,1,1,2,1,2,2,2,2,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,2],
        [2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,1,2,1,2,2,2,1,2,1,1,2,1,1,1,1,2,2,2,1,2,2,2,2,2,1,2,2],
        [2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,1,1,1,1,1,2,1,2,1,1,2,2,2,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1,2,1,2,1,2],
        [2,2,2,2,2,2,2,1,1,1,1,2,2,1,2,2,2,2,2,1,2,2,2,2,1,2,2,2,1,2,1,1,1,1,2,2,2,2,1,2,1,2,1,2],
        [2,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,2,2,2,2,1,1,1,1,2,1,2,1,2],
        [2,1,2,2,1,2,2,2,1,2,1,1,1,1,2,2,2,2,2,1,2,2,2,2,2,2,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2],
        [2,2,2,1,2,2,2,2,2,2,1,2,2,1,1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,1,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,2,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,1,2,1,2,2,1,2,1,1,1,2],
        [2,2,2,2,2,2,2,2,1,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,1,2,2,1,2,1,0,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,2,2,2,1,1,1,2,2,1,2,2],
        [2,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,2,2,1,2,1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
        [2,2,1,2,2,2,2,2,2,2,1,2,2,2,2,1,2,1,2,2,1,2,2,1,1,1,1,2,2,1,2,2,1,1,1,2,2,1,2,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1,2,1,1,1,2,1,2,1,1,1,2,2,1,2,2,1,1,1,2,2,1,2,2],
        [2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1,2,1,1,1,2,1,1,2,1,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,2,1,2,2,2,1,2,2,2,2,2,2,2,1,2,1,1,2,1,2,1,1,2,1,1,1,2,2,1,2,2,1,1,1,2,2,2,2,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,2,1,1,2,1,2,1,1,2,1,1,2,2,1,2,1,1,1,2,2,1,2,2,2,1,2,2,2,1,2,2],
        [2,1,1,1,2,1,1,1,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,2,2,1,2,2,2,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,2,2,1,2,2,2,2,2,2,1,2,2,1,1,2,2,2,1,1,1,1,1,1,1,2,1,2,2,2,2,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,2,2,1,2,1,2,1,2,1,1,1,2,2,1,2,2,2,1,2,2,2,1,2,2],
        [2,1,1,1,2,1,2,2,2,1,1,2,2,1,1,2,2,1,2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,1,2,2,1,1,1,2,1,1,1,1,2,2,1,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
        [2,2,1,2,2,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,2,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,1,2,1,1,1,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,1,2,2,2,2,2,2],
        [2,1,2,2,1,2,1,2,2,1,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2],
        [2,1,2,1,1,2,2,1,2,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,2,1,1,1,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,1,2,2,2,1,1,1,2,2,1,2,2,2,2,2,2,2,1,2,2],
        [2,2,1,2,1,2,1,2,2,2,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,2,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,2],
        [2,1,2,1,2,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,2,2,2,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,2,1,1,2,1,1,1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,1,1,1,2,2,1,2,2,2,1,2,2,2,1,2,2],
        [2,1,1,2,1,1,2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,1,2,1,1,2,1,1,2,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2],
        [2,1,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,2,2,2,1,1,1,2,1,1,1,2,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,2,2,1,1,1,2,2,1,2,1,1,1,1,1,2,1,1,1,2,2,1,1,1,1,1,2],
        [2,1,2,1,2,1,2,2,1,2,1,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,2,2,1,2,1,2,1,2,1,1,2,2,2,1,2],
        [2,1,1,1,2,1,1,2,1,2,1,1,1,2,2,2,1,2,1,2,1,1,1,2,1,2,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2],
        [2,1,2,1,1,2,1,1,2,1,2,2,1,1,1,1,1,2,1,2,2,1,2,2,1,1,2,1,1,1,2,1,1,1,2,1,2,2,1,2,1,2,1,2],
        [2,2,1,2,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,2,1,2,2,1,2,1,1,2,1,2,1,1,1,1,1,2,1,1,2],
        [2,1,1,1,2,1,2,1,1,1,2,1,1,2,2,1,1,2,1,2,1,2,2,1,2,1,1,1,2,1,1,2,1,1,1,2,2,2,2,1,2,1,2,2],
        [2,1,2,1,1,1,1,2,1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,2,1,1,2,1,2,1,1,2,1,1,1,1,2,1,2,1,1,2],
        [2,1,1,2,2,2,1,1,1,2,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,1,2,1,2,1,2,1,2,1,1,2,2,1,2,1,1,2,1,2],
        [2,1,2,1,1,1,2,2,1,1,1,2,1,2,1,1,2,1,1,2,2,1,2,1,2,1,2,1,1,1,1,2,1,1,2,1,1,1,2,1,2,2,1,2],
        [2,1,2,1,2,1,1,1,2,2,1,1,2,1,2,2,1,2,1,1,1,1,1,1,2,1,1,1,2,1,2,1,2,1,2,1,2,2,1,1,1,1,1,2],
        [2,1,2,1,2,1,2,1,2,1,1,2,1,1,1,1,1,1,2,1,2,2,1,2,2,1,2,1,1,2,1,1,2,1,2,1,1,1,1,2,2,2,1,2],
        [2,1,1,1,1,2,2,1,2,1,1,1,2,2,1,2,2,1,1,2,1,1,1,1,1,1,1,2,2,1,2,1,1,2,1,1,2,1,2,1,1,1,2,2],
        [2,2,1,2,2,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,2,1,2,2,2,1,2,1,2,1,1,2,1,2,1,2,2,1,1,1,2,1,1,2],
        [2,2,1,1,1,1,1,2,1,2,2,1,1,1,0,1,1,1,2,1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,2,2,2,1,1,2],
        [2,1,1,2,2,1,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,2,1,1,2,2,1,1,2,1,2,1,2,1,1,1,1,1,1,2,2],
        [2,1,2,1,1,1,2,1,1,2,2,1,2,2,1,2,2,1,1,2,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,2,2,1,1,2],
        [2,1,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,2,2,2,1,1,2,2,1,2,1,2,1,2,2,1,1,2,1,2,1,2,2,1,1,1,2,2],
        [2,2,1,2,1,1,1,2,1,1,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,2,1,1,2,1,1,2],
        [2,1,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,2,2,2,1,1,2,1,2,1,1,2,1,2,1,2],
        [2,1,2,2,1,1,1,2,1,2,2,1,2,1,1,1,1,1,1,2,1,2,2,1,1,2,1,1,1,1,2,2,1,2,2,1,1,1,2,1,1,2,1,2],
        [2,1,2,1,2,1,2,1,2,1,1,1,1,2,1,2,1,2,1,2,1,1,1,2,1,1,2,2,2,1,1,2,1,1,1,2,1,2,1,1,2,2,1,2],
        [2,1,1,1,1,2,1,1,1,2,1,2,2,1,2,1,1,1,2,1,2,2,1,2,1,2,1,1,1,1,2,1,1,2,1,2,1,1,1,2,2,1,1,2],
        [2,2,2,2,1,1,1,2,1,1,1,1,2,1,1,2,1,2,1,1,1,1,1,2,1,1,2,2,1,2,2,1,2,1,1,1,2,1,2,1,1,1,2,2],
        [2,1,1,1,2,2,2,1,1,2,1,2,1,2,1,1,1,2,1,2,1,2,1,2,2,1,2,1,1,1,2,1,2,1,2,2,2,1,1,1,2,1,1,2],
        [2,1,2,1,1,2,1,1,1,2,2,1,1,1,2,2,2,1,1,2,1,2,1,1,1,2,2,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,2],
        [2,1,2,2,1,1,2,2,2,1,1,1,2,1,2,1,1,1,2,2,1,1,1,2,1,1,1,1,2,2,1,2,1,2,1,1,2,2,2,1,1,2,1,2],
        [2,1,2,1,2,1,1,2,1,1,1,2,1,1,1,1,2,2,1,1,1,2,1,1,2,2,2,2,2,1,1,2,1,2,2,2,1,1,1,2,1,2,1,2],
        [2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,2],
        [2,1,1,2,1,2,2,2,2,2,2,1,1,2,2,1,1,2,1,2,2,2,1,2,1,2,2,2,1,2,1,2,1,2,1,2,1,2,2,2,1,1,1,2],
        [2,2,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,2,1,2],
        [2,2,2,1,2,2,2,1,2,2,1,1,2,2,2,2,1,1,1,1,2,2,1,1,1,2,2,2,2,1,2,1,2,1,2,1,2,2,2,2,1,1,2,2],
        [2,1,1,1,2,2,1,1,1,2,2,1,1,1,2,1,1,2,1,2,1,1,1,2,2,1,1,1,1,1,2,1,2,1,2,1,2,1,1,1,1,2,1,2],
        [2,1,2,1,1,1,1,1,1,1,2,2,2,1,1,1,2,1,1,1,1,2,2,1,1,1,2,2,2,1,2,1,2,1,2,1,1,2,1,2,1,1,1,2],
        [2,1,2,2,1,2,1,1,1,2,1,1,1,2,1,2,1,1,2,1,2,1,1,1,2,1,2,1,1,2,1,1,2,1,1,2,1,1,1,2,1,2,1,2],
        [2,1,2,1,1,2,2,1,2,2,1,2,1,2,1,2,1,2,1,1,1,1,2,2,1,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,2,2],
        [2,1,2,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,2,2,2,1,2,1,1,2,1,1,1,1,1,2,1,2,1,1,1,2,2,1,1,1,1,2],
        [2,1,2,1,2,1,2,1,1,2,2,1,1,2,2,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,2,2,2,1,1,1,2,2,1,2],
        [2,1,2,1,2,1,1,2,1,1,1,1,2,1,1,2,1,2,2,2,1,2,1,2,1,1,2,1,1,2,1,1,2,1,1,1,1,1,2,1,1,2,1,2],
        [2,1,1,2,1,1,2,1,1,2,2,2,1,1,2,1,2,1,1,1,2,1,2,1,2,1,1,2,1,1,1,2,1,1,2,2,1,1,2,2,1,2,1,2],
        [2,2,1,1,2,2,1,2,1,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,1,2,2,1,1,2,1,1,2,1,1,1,1,2,1,2],
        [2,1,2,1,1,1,1,1,2,1,1,1,2,1,2,1,2,1,1,2,1,1,2,1,2,2,1,1,2,1,1,1,2,1,1,2,1,1,2,1,2,2,2,2],
        [2,1,1,1,2,2,2,1,2,2,2,2,1,1,1,2,2,2,1,1,2,1,2,2,1,1,1,2,1,2,2,2,1,2,1,1,1,2,2,1,1,1,1,2],
        [2,2,2,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,2,1,2,1,2],
        [2,1,1,1,1,2,2,2,2,1,2,1,1,2,2,1,2,1,2,1,2,1,1,2,2,2,1,2,1,2,2,2,2,1,1,2,1,2,1,1,1,2,1,2],
        [2,1,2,2,1,2,1,1,1,1,2,2,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,2,2,2,2,1,2],
        [2,1,1,2,1,1,2,1,2,1,2,1,1,2,2,1,2,2,2,2,1,1,2,1,2,1,2,2,1,2,1,2,1,2,1,2,1,2,2,1,1,1,1,2],
        [2,2,1,1,2,1,1,2,2,1,1,2,2,1,1,1,1,1,1,1,2,1,2,1,1,1,2,1,1,2,1,2,1,1,1,1,2,1,1,1,2,2,2,2],
        [2,2,2,1,1,2,1,2,1,2,1,2,1,1,1,1,2,2,1,2,1,1,1,2,2,1,1,2,1,2,1,2,1,1,2,1,2,2,1,2,1,1,1,2],
        [2,1,1,2,1,1,2,1,1,2,1,1,1,2,2,1,2,1,2,1,1,2,1,1,2,1,2,1,2,1,1,1,2,2,2,1,2,1,1,1,2,2,1,2],
        [2,1,2,2,2,1,1,2,1,1,2,2,1,1,1,2,1,1,1,1,2,1,2,1,2,1,1,1,1,1,2,2,1,1,1,1,2,1,2,1,1,2,1,2],
        [2,1,1,2,1,2,1,1,1,1,1,1,2,2,1,1,1,2,2,1,1,2,1,1,2,1,2,1,2,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2],
        [2,2,1,2,1,1,1,2,2,2,2,1,1,1,2,2,2,1,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2,1,1,2,1,1,2,1,2,2],
        [2,1,1,2,1,2,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,2,1,2,1,1,2],
        [2,1,2,2,1,2,2,2,2,1,1,2,1,2,2,2,2,2,2,1,1,2,1,2,2,1,1,2,2,2,2,1,2,1,2,1,2,1,2,1,2,2,1,2],
        [2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,3,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
]

var coords_begin = [
    [15,2],
    [2,2],
    [27,41],
    [2,21],
    [6,7],
]

var gaz = [
    [
        [21,31],[15,19],[22,2],[7,13],[13,29]
    ],
    [
        [21,8],[27,19],[5,18],[11,31],[11,36]
    ],
    [
        [6,37],[19,41],[3,14],[15,24],[22,29]
    ],
    [
        [14,6],[9,23],[19,40],[28,16],[2,33]
    ],
    [
        [1,37],[1,27],[22,2],[1,13],[14,15]
    ],
]