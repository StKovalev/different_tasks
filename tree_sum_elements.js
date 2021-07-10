// Tree sum elements
// Сумма всех узлов дерева

const tree = [
    {
        v: 5,
        c: [
            {
                v: 5,
            },
            {
                v: 10,
                c: [
                    {
                        v: 5,
                    },      
                ],
            },
            {
                v: 11,
            },        
        ]
    },
    {
        v: 5,
    },
];

function treeSumElements(tree) {
    if (!tree.length) {
        return 0;
    }
    
    let sum = 0;
    let stack = [];

    tree.forEach(node => stack.push(node));

    while (stack.length) {
        let node = stack.pop();
        
        sum += node.v;

        if(node.c) {
           node.c.forEach(n => stack.push(n));
        }    
    }
    
    return sum;
}

console.log(treeSumElements(tree));
