export default function PostsList({posts}) {
    return posts.map(post => (
                <article key={post._id}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div class="px-6 py-4">
                            {/* TODO Delete */}
                            <div class="font-bold text-xl mb-2">{post.title}</div>
                            <p className="text-xs- mb-2">{post.postedBy}</p>
                            <p className="text-gray-700 text-base">{post.body}</p>
                            {/* TODO Implement Starred By */}
                            {/* <p>Starred By:</p> */}
                        </div>
                        {/* <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div> */}
                    </div>
                </article>
            ))

}