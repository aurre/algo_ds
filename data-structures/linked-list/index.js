class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    };
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // Inset at the beginning
    prepend(data) {
        this.head = new Node(data, this.head);
        this.length++;
    };

    insertLastNode(data) {
        const newNode = new Node(data);
        let currentNode = this.head;

        if (!currentNode) {
            this.head = newNode;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }

    // Insert at index (WIP)

    // Remove at index (WIP)

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (index === count) {
                console.log(current.data);
            }
            current = current.next;
            count++;
        }
    }

    // Clear List
    clear() {
        this.head = null;
        this.length = 0;
    }

    // Print List
    print() {
        let currentNode = this.head;

        while (currentNode.next) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(currentNode.data);
    };
}

const list = new LinkedList();
list.prepend(300);
// list.prepend(200);
// list.prepend(100);
list.insertLastNode(400);
// list.insertLastNode(500);
// list.clear();
// list.getAt(0);
list.print();
// console.log(list);