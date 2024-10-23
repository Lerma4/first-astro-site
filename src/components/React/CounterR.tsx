import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="p-4 border rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-bold mb-4">React Counter: {count}</h1>
            <div className="space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => setCount(count - 1)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
