//利用道格拉斯所说的模块模式 module pattern实现单例模式。
//在如c++、c#类的面向对象语言中，实现单例模式通常是通过一个私有的静态变量，但js中没有私有和静态变量（有静态方法）
//利用函数的块作用域和闭包，通过实现立即值得函数并返回一个对象。
const Instance = (function () {
    let students = [];

    return {
        getCount() {
            return students.length;
        },
        addStudent(name) {
            students.push(name)
        }
    }
})();
