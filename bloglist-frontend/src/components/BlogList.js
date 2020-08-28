import React from 'react'
import { useSelector } from 'react-redux'
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from 'react-router-dom'
import Blog from './Blog'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from '@material-ui/core'

const BlogList = () => {
  const blogs = useSelector(({ blogs }) => blogs)
  const match = useRouteMatch('/blogs/:id')
  const history = useHistory()

  const blog = match ? blogs.find((b) => b.id === match.params.id) : null

  if (!blogs[0]) return null

  const blogList = (blogs) => (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {blogs
              .sort((a, b) => b.likes - a.likes)
              .map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>
                    <Link to={`/blogs/${blog.id}`} key={blog.id}>
                      {blog.title}
                    </Link>
                  </TableCell>
                  <TableCell>{blog.author}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )

  const handleCreate = () => {
    history.push('/blogs/create')
  }

  return (
    <div>
      <Switch>
        <Route path="/blogs/:id">
          <Blog blog={blog} />
        </Route>
        <Route path={['/', '/blogs']}>
          <Button onClick={handleCreate} variant="contained" color="primary">
            create new
          </Button>
          {blogList(blogs)}
        </Route>
      </Switch>
    </div>
  )
}
export default BlogList
