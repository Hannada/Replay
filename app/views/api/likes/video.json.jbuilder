json.video do 
    json.extract! @video, :id, :title, :description, :user_id
    json.videoUrl url_for(@video.video_url)
    json.thumbnailUrl url_for(@video.thumbnail_url)
    json.views @video.views
    json.created_at @video.created_at.to_s
    json.likes do 
        json.upvotes @video.count_likes[0]
        json.downvotes @video.count_likes[1]
        json.likers @video.likers
    end
end
