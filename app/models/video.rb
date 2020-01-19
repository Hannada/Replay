class Video < ApplicationRecord
    validates :title, :description, presence: true
    validate :ensure_video
    validate :ensure_thumbnail

    has_one_attached :video_url
    has_one_attached :thumbnail_url
    belongs_to :user
    has_many :comments
    has_many :likes, as: :likeable, dependent: :destroy


    def ensure_video
        unless self.video_url.attached?
            errors[:video] << 'Must choose and .mp4 formatted video'
        end
    end

    def ensure_thumbnail
        
        unless self.thumbnail_url.attached?
            errors[:videos] << 'Must attach a thumbnail'
        end

    end

    

    def count_likes
        upvotes = 0
        downvotes = 0
        self.likes.each do |like|
            if like.liked
                upvotes += 1
            else
                downvotes += 1
            end
        end
        return [upvotes, downvotes]
    end 

    def likers
        like_hash = {}

        self.likes.each do |like| 
            like_hash[like.user_id] = {user_id: like.user_id, liked: like.liked}
        end
        return like_hash
    end 
end

