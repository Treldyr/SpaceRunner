var boards = [
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,2],
        [2,1,1,1,2,2,2,1,1,1,1,2,2,1,2,1,2,1,2,1,1,1,2,1,1,2,2,1,1,2,1,2,1,2,1,2,1,1,2,1,3,3,1,2],
        [2,1,1,1,2,1,1,1,2,1,1,2,1,1,2,2,1,1,2,1,2,1,2,1,1,2,1,2,1,1,1,2,1,2,1,1,2,2,1,1,3,3,1,2],
        [2,1,2,1,1,2,1,2,2,2,1,2,1,2,1,1,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,1,1,2,2,1,1,1,3,1,1,1,2],
        [2,1,2,2,1,1,2,1,1,1,1,2,1,1,1,2,1,2,1,2,1,1,1,1,2,1,2,1,2,1,1,2,2,1,1,2,1,2,2,1,2,2,1,2],
        [2,1,1,1,2,1,1,1,2,1,2,1,1,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,2,1,2,2,1,1,2,1,1,2,1,1,1,1,1,2],
        [2,1,2,1,1,2,2,2,1,1,1,1,2,1,1,1,2,2,2,1,1,2,2,1,1,2,1,1,1,2,1,1,2,1,1,1,1,2,1,3,3,3,1,2],
        [2,1,2,2,1,2,1,1,1,2,2,1,2,1,2,2,1,1,1,2,1,1,1,1,2,1,1,2,1,1,2,1,1,2,2,2,1,2,1,3,3,1,1,2],
        [2,1,1,1,1,2,1,2,2,1,1,1,1,2,1,1,2,1,1,1,2,2,1,1,2,1,2,2,2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2],
        [2,2,2,2,2,1,1,1,1,2,1,1,2,1,1,1,2,1,2,1,1,1,2,1,2,1,1,1,1,2,1,1,1,2,1,1,2,1,1,2,2,1,1,2],
        [2,1,1,1,1,2,1,1,2,1,2,2,1,1,2,1,2,1,1,3,1,1,1,1,2,1,3,3,1,2,2,2,2,1,1,2,1,1,1,1,2,1,2,2],
        [2,1,2,2,1,1,2,2,1,1,1,1,2,1,2,1,1,2,3,1,3,1,1,2,1,1,3,3,1,1,1,2,1,1,1,1,2,1,2,1,2,1,1,2],
        [2,1,1,1,2,1,1,2,1,2,2,1,1,2,1,2,1,1,3,1,3,1,2,1,2,1,1,1,1,1,2,1,1,2,2,1,1,2,1,1,1,2,2,2],
        [2,2,2,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,2,1,2,2,1,1,1,2,1,2,2,1,1,2,1,1,1,2],
        [2,1,1,1,2,1,1,2,2,1,1,2,2,1,2,1,1,3,3,1,3,3,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1,2,1,2,2],
        [2,1,2,2,1,2,1,1,1,2,2,1,1,1,1,2,1,3,3,1,1,3,3,1,2,1,2,1,2,2,2,2,1,3,1,2,1,1,2,1,1,1,1,2],
        [2,1,1,1,1,2,2,1,1,1,1,2,1,2,1,2,1,1,1,2,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,2,2,1,2],
        [2,2,2,2,1,1,1,2,1,2,2,1,2,1,1,1,1,2,1,1,2,1,3,2,1,1,2,1,2,2,1,2,1,2,2,1,1,1,1,2,1,1,1,2],
        [2,1,1,1,1,3,1,2,1,1,1,1,1,2,2,1,1,2,2,1,1,1,2,1,1,2,1,2,1,2,1,1,2,1,1,1,2,2,1,1,2,1,1,2],
        [2,1,1,2,1,1,1,1,2,1,3,1,2,1,1,1,2,1,2,1,2,1,1,2,1,1,1,2,1,1,1,2,1,1,2,2,1,1,1,1,1,2,2,2],
        [2,1,3,1,2,2,2,1,2,1,1,1,2,2,2,1,2,1,1,2,1,2,2,2,1,1,2,1,2,2,2,1,2,2,1,1,2,1,2,2,1,1,1,2],
        [2,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,2,1,1,2,2,2,1,2],
        [2,1,2,2,1,1,2,2,1,1,2,1,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,1,2,2,1,2,1,1,2,1,1,3,1,2,1,1,1,2],
        [2,1,2,1,1,2,1,1,2,2,1,1,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,2,1,1,1,1,2,1,1,2,1,1,1,2,1,2,2,2],
        [2,1,2,1,2,1,1,2,1,1,2,1,2,2,1,2,1,2,1,2,2,1,1,1,2,1,1,1,1,2,2,2,1,2,1,1,2,2,1,2,1,1,1,2],
        [2,1,2,1,1,2,1,1,1,3,1,2,1,1,1,1,1,2,1,1,1,2,2,2,1,1,2,2,2,1,2,1,1,1,2,1,2,1,1,2,2,2,1,2],
        [2,1,1,2,0,0,2,1,2,1,1,1,2,2,1,2,2,1,1,3,1,1,1,2,1,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,1,2,1,2],
        [2,1,1,2,0,0,2,1,1,1,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ],
    [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,3,1,1,1,3,1,1,1,3,3,3,1,1,1,1,1,1,3,3,3,3,2],
        [2,1,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,2,1,3,1,3,1,3,1,1,1,3,3,3,1,1,1,3,3,1,3,1,1,1,1,1,2],
        [2,1,2,2,1,1,1,1,2,1,1,2,2,1,1,6,1,1,2,1,3,1,1,1,1,3,1,3,1,1,1,1,3,1,3,1,1,3,3,1,3,1,1,2],
        [2,1,1,1,2,2,1,1,2,2,2,1,1,2,1,5,1,1,2,1,1,3,1,3,3,1,1,3,1,3,1,3,1,1,3,1,1,3,3,1,3,3,3,2],
        [2,2,2,1,1,1,2,2,1,1,1,2,1,1,1,6,1,1,2,3,1,1,3,1,1,3,1,1,1,3,1,3,3,1,1,3,3,1,1,1,1,1,1,2],
        [2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,5,1,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,1,1,3,1,1,1,3,1,3,3,1,2],
        [2,1,2,2,1,1,2,1,1,1,2,1,2,1,1,6,1,1,2,1,1,1,1,1,1,1,3,1,3,1,3,1,3,1,3,1,3,1,1,3,1,2,1,2],
        [2,1,2,1,1,2,1,1,2,1,1,1,2,1,2,1,1,2,1,1,3,3,3,1,3,1,1,3,1,1,1,3,1,3,1,1,3,1,3,1,1,3,1,2],
        [2,2,1,1,2,1,2,1,2,1,2,2,1,1,1,1,2,1,3,3,1,1,3,1,3,1,3,1,3,1,1,1,1,1,1,1,1,3,1,1,3,3,1,2],
        [2,1,1,2,1,1,1,2,1,1,2,1,1,2,1,2,2,1,1,1,3,1,1,1,1,3,1,1,1,3,3,1,1,3,1,1,1,3,1,3,3,1,1,2],
        [2,2,1,1,2,1,2,1,1,2,1,2,2,1,1,2,1,3,3,1,3,3,3,1,1,3,1,3,1,1,1,1,3,1,1,3,3,3,1,1,3,1,1,2],
        [2,1,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,3,1,1,1,1,3,1,3,1,1,3,3,1,3,1,1,3,1,1,1,3,1,1,3,3,2],
        [2,1,2,1,2,1,2,1,1,1,2,2,1,1,1,1,3,1,1,3,1,1,3,3,1,1,3,3,1,1,1,1,3,1,1,1,3,1,3,3,1,1,1,2],
        [2,1,1,2,1,1,2,1,2,2,1,1,2,1,2,1,1,3,1,1,1,3,1,1,3,3,1,1,1,3,3,1,3,3,1,3,1,1,1,3,3,1,3,2],
        [2,2,1,2,1,1,2,1,1,1,2,1,2,1,1,2,3,3,3,1,1,3,1,1,1,1,3,1,3,1,1,3,1,1,1,3,1,3,1,1,1,1,1,2],
        [2,2,1,1,2,2,1,1,2,1,2,1,2,2,1,3,1,1,1,3,1,1,3,3,3,1,1,3,1,1,1,1,3,3,3,1,1,1,3,3,1,3,3,2],
        [2,1,2,1,1,1,2,1,2,1,2,1,1,1,1,1,3,1,3,3,3,1,1,1,1,3,1,1,1,3,3,1,1,1,1,1,3,1,1,1,3,1,1,2],
        [2,1,1,2,2,1,2,1,2,1,1,2,1,2,2,1,3,1,1,1,1,3,3,1,1,1,3,1,3,1,1,3,1,3,1,1,3,3,1,1,1,1,3,2],
        [2,2,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,3,1,3,1,1,1,3,1,1,3,1,1,1,3,3,1,3,3,3,1,1,3,1,3,3,1,2],
        [2,1,2,2,1,1,1,2,1,2,2,1,2,1,2,1,1,1,3,1,1,3,1,3,1,3,1,1,3,1,1,1,3,1,1,1,1,1,1,3,1,1,1,2],
        [2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,3,1,1,3,1,1,1,1,3,1,3,1,3,3,3,1,1,3,3,3,1,3,1,1,3,1,2],
        [2,2,1,2,2,1,2,2,2,1,2,2,1,2,1,1,2,3,1,1,3,1,3,1,1,3,1,1,1,1,1,1,1,3,1,1,1,3,1,1,3,1,1,2],
        [2,1,1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,3,3,1,3,3,1,3,1,3,3,3,3,1,3,1,1,1,3,1,1,1,3,1,1,1,2],
        [2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,1,1,1,3,3,1,1,1,1,3,1,1,1,1,3,1,3,3,3,3,1,1,3,1,3,3,3,1,2],
        [2,1,1,2,1,2,1,1,2,2,1,1,1,2,1,2,2,2,2,3,1,3,1,3,1,1,3,3,1,1,3,1,1,1,1,3,3,1,3,1,1,1,1,2],
        [2,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,3,1,1,1,3,1,1,3,3,1,1,1,3,1,1,1,3,1,1,1,3,3,1,2],
        [2,1,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,0,1,2,3,1,3,1,1,3,3,3,1,1,3,3,1,3,1,3,1,1,3,3,1,3,1,2],
        [2,1,1,1,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,3,1,1,3,1,1,1,1,1,3,1,1,1,1,1,1,1,3,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ]
]

var coords_begin = [
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1]
]

var coords_begin_boss = [
    [0,1],
    [0,1],
    [0,1],
    [0,1],
    [0,1]
]

var levers = [
    [
        //[6,22,"on",  [[2,21]], []  ],
    ],
    [
        //[1,14,"on",  [], [[2,20]]  ],
    ],
    [
        //[8,1,"on",  [[9,18]], [[12,5]]  ],
    ],
    [
        //[6,6,"on",  [[4,7],[6,4]], [[6,8],[8,7],[8,5]]  ],
    ],
    [
        [4,35,"on",  [[1,37]], []  ],
        [3,42,"on",  [[4,39]], []  ],
        [11,41,"on",  [[9,34],[10,34]], []  ],
        [19,32,"on",  [[16,31]], []  ],
        [18,5,"on",  [], [[17,5]]  ],
        [3,17,"on",  [[2,16],[1,16],[1,17],[1,18]], []  ],
        [4,17,"on",  [], [[2,16],[1,16],[1,17],[1,18]]  ],
        [5,17,"on",  [[2,16],[1,16],[1,17],[1,18]], []  ],
        [6,17,"on",  [], [[2,16],[1,16],[1,17],[1,18]]  ],
        [7,17,"on",  [[2,16],[1,16],[1,17],[1,18]], []  ],
        [24,17,"on",  [], []  ],
        [25,12,"on",  [], []  ],
        [27,14,"on",  [[27,15]], []  ],
    ],
]