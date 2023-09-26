import './App.css'
// BrowserRouter / HashRouter
// 前者需要服务端对不同URL返回不同的HTML,后端需配置 / 后者不需要服务端渲染,通过浏览器#来区分path就可以
// Routes / Route - 用JSX
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>

            {/* 没有匹配到 */}
            <Route path='*' element={<NoMatch />} />
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

      {/* Outlet 可以渲染内部嵌套的UI 如以上的Link */}
      <Outlet />
    </div>
  )
}

function ProductDetail() {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <h1>ProductDetail:{params.id}</h1>
      <button onClick={() => navigate('/')}>go home</button>
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
      <Link to="/product/123">商品详情</Link>

      <Outlet />
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h1>NoMatch</h1>
    </div>
  )
}
