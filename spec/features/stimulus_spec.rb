require "rails_helper"

describe "/[USERNAME]/feed stimulus specs" do
  it "the comment textarea height automatically resizes itself", js: true, points: 5 do
    user = User.create(username: "alice", email: "alice@example.com", password: "password", avatar_image: File.open("#{Rails.root}/spec/support/test_image.jpeg"))

    sign_in(user)

    leader = User.create(username: "leader", email: "leader@example.com", password: "password", private: false, avatar_image: File.open("#{Rails.root}/spec/support/test_image.jpeg"))
    photo = Photo.create(image: File.open("#{Rails.root}/spec/support/test_image.jpeg"), caption: "caption", owner_id: leader.id)
    FollowRequest.create(sender_id: user.id, recipient_id: leader.id, status: "accepted")

    visit "/#{user.username}/feed"

    comment_textarea = find("textarea")
    old_height = comment_textarea.rect.height

    within("div[data-controller='character-counter']") do
      fill_in "comment[body]", with: "hi there " * 100
    end

    new_height = comment_textarea.rect.height

    expect(old_height).to be < new_height
  end

  it "the count of characters in the comment textarea is automatically updated", js: true, points: 5 do
    user = User.create(username: "alice", email: "alice@example.com", password: "password", avatar_image: File.open("#{Rails.root}/spec/support/test_image.jpeg"))

    sign_in(user)

    leader = User.create(username: "leader", email: "leader@example.com", password: "password", private: false, avatar_image: File.open("#{Rails.root}/spec/support/test_image.jpeg"))
    photo = Photo.create(image: File.open("#{Rails.root}/spec/support/test_image.jpeg"), caption: "caption", owner_id: leader.id)
    FollowRequest.create(sender_id: user.id, recipient_id: leader.id, status: "accepted")

    visit "/#{user.username}/feed"

    expect(page).to have_content("There are 0 characters in this comment.")

    within("div[data-controller='character-counter']") do
      fill_in "comment[body]", with: "hi"
    end

    expect(page).to have_content("There are 2 characters in this comment.")
  end

  it "shows a toast message when a comment is created", js: true, points: 5 do
    user = User.create(username: "alice", email: "alice@example.com", password: "password", avatar_image: File.open("#{Rails.root}/spec/support/test_image.jpeg"))

    sign_in(user)

    leader = User.create(username: "leader", email: "leader@example.com", password: "password", private: false, avatar_image: File.open("#{Rails.root}/spec/support/test_image.jpeg"))
    photo = Photo.create(image: File.open("#{Rails.root}/spec/support/test_image.jpeg"), caption: "caption", owner_id: leader.id)
    FollowRequest.create(sender_id: user.id, recipient_id: leader.id, status: "accepted")

    visit "/#{user.username}/feed"

    expect(page).to have_content("There are 0 characters in this comment.")

    within("div[data-controller='character-counter']") do
      fill_in "comment[body]", with: "hello, friend"
    end

    click_on "Create Comment"

    expect(page).to have_content("hello, friend")

    within("#toasts") do
      expect(page).to have_content("Comment was successfully created.")
    end
  end
end


def sign_in(user)
  visit "/users/sign_in"
  fill_in "Email", with: user.email
  fill_in "Password", with: user.password

  click_button "Sign in"
  expect(page).to have_current_path "/"
end
