import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate, useParams, useResolvedPath, useMatch } from "./mini-react-router";
// import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate, useParams, useResolvedPath, useMatch } from "react-router-dom";

const About = React.lazy(() => import('./pages/About'))

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/about" element={
              <React.Suspense
                fallback={
                  <h1>loading...</h1>
                }>
                <About />
              </React.Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

function CustomLink({ to, ...rest }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return <Link to={to} {...rest} style={{ color: match ? "red" : "black" }} />;
}

function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <CustomLink to="/">首页</CustomLink>
      <CustomLink to="/product">商品</CustomLink>
      <CustomLink to="/about">关于</CustomLink>

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
      <CustomLink to="/product/123">商品详情</CustomLink>
      {/* useResolvedPath 可以匹配 path: 123  */}
      {/* <CustomLink to="123">商品详情</CustomLink> */}

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
