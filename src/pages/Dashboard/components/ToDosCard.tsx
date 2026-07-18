import React, { useState } from 'react';
import { Clock, Eye } from 'lucide-react';

const ToDosCard: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: '1', task: 'Sweeping Checklist', date: '10/10/2025', completed: false },
    { id: '2', task: 'Sweeping Checklist', date: '09/10/2025', completed: false },
    { id: '3', task: 'Sweeping Checklist', date: '08/10/2025', completed: true },
  ]);

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-indigo-500" />
          <h4 className="text-base font-bold text-gray-800">My To-Dos ⏳</h4>
        </div>

        <div className="space-y-3 mt-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                todo.completed
                  ? 'bg-emerald-50/30 border-emerald-100 text-gray-400'
                  : 'bg-gray-50/50 border-gray-100 text-gray-700'
              }`}
            >
              <div className="flex flex-col">
                <span className={`text-sm font-semibold ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                  {todo.task}
                </span>
                <span className="text-[10px] text-gray-400 font-semibold mt-0.5">{todo.date}</span>
              </div>
              <div className="flex items-center gap-2">
                {todo.completed ? (
                  <>
                    <span className="px-2 py-0.5 text-[9px] font-bold text-emerald-700 bg-emerald-100/50 rounded-md">
                      ✓ Completed
                    </span>
                    <button className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-bold">
                      Pending
                    </span>
                    <button
                      onClick={() => handleToggleTodo(todo.id)}
                      className="w-7 h-7 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center hover:bg-violet-100 transition-colors"
                    >
                      ✓
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDosCard;
