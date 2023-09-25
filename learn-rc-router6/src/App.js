import './App.css'
// BrowserRouter / HashRouter
// 前者需要服务端对不同URL返回不同的HTML,后端需配置 / 后者不需要服务端渲染,通过浏览器#来区分path就可以
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/product' element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <Link to="/">首页</Link>
      <Link to="/product">商品</Link>

      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function Product() {
  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default App;
