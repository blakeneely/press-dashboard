import BackButton from '@/components/BackButton'
import PostsEditForm from '@/components/posts/PostsEditForm'

interface PostsEditPageProps {
  params: {
    id: string
  }
}

const PostEditPage = ({ params }: PostsEditPageProps) => {
  return (
    <>
      <BackButton text='Back To Posts' link='/posts' />
      <PostsEditForm params={params} />
    </>
  )
}

export default PostEditPage
