import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import Blog from './Blog'

const BlogList = () => {
  const blogs = useSelector(({ blogs }) => blogs)
  const match = useRouteMatch('/blogs/:id')

  const blog = match ? blogs.find((b) => b.id === match.params.id) : null

  if (!blogs[0]) return null

  const blogList = (blogs) => (
    <div>
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <div>{blog.title}</div>
          </Link>
        ))}
    </div>
  )

  return (
    <div>
      <Switch>
        <Route path="/blogs/:id">
          <Blog blog={blog} />
        </Route>
        <Route path="/blogs">{blogList(blogs)}</Route>
        <Route path="/">{blogList(blogs)}</Route>
      </Switch>
    </div>
  )
}
export default BlogList
