import React, { useState } from 'react';

const categories = [
    { id: 'productivity', name: '生产力' },
    { id: 'design', name: '设计创意' },
    { id: 'development', name: '开发编程' },
    { id: 'document', name: '文档处理' },
    { id: 'multimedia', name: '多媒体' },
    { id: 'network', name: '网络工具' },
    { id: 'business', name: '商业财务' },
    { id: 'education', name: '教育学习' },
    { id: 'data', name: '数据分析' },
    { id: 'security', name: '安全隐私' },
    { id: 'social', name: '社交媒体' },
    { id: 'health', name: '健康生活' },
    { id: 'travel', name: '旅行工具' },
    { id: 'entertainment', name: '娱乐休闲' },
    { id: 'research', name: '科研学术' },
    { id: 'ai', name: '人工智能' },
  ];

export const ShowcaseSidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      {/* 左侧分类导航 */}
      <div className="w-64 pr-8">
        <h2 className="text-xl font-semibold mb-4">分类</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-2 list-none">
              <button
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShowcaseSidebar;