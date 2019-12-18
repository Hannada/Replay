class Video < ApplicationRecord
    validates :title, :description, presence: true
    validate :video_url
    validate :thumbnail_url
    # validates :video_url, uniqueness: true

    belongs_to :user

    has_one_attached :video_url
    has_one_attached :thumbnail_url

    def ensure_video
        unless self.video_url.attached?
            errors[:video] << 'Must choose and .mp4 formatted video'
        end
    end

    def ensure_thumbnail
        unless self.thumbnail_url.attached?
            errors[:video] << 'Must attach a thumbnail'

        end

    end
end
