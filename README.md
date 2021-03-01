## Goal
This is an app to teach how to improve the file input with `bootstrap` and `simple_for`.
This demo was created from [this one](https://github.com/andrerferrer/basic-photo-demo).

[Check my other demos](https://github.com/andrerferrer/dedemos/).

### If you want to check it Locally
```sh
gh_repository=''
git clone $gh_repository demo
cd demo
bundle install
yarn install
rails db:create db:migrate db:seed
rails s

# now you can go to http://localhost:3000/
```

## How to
```erb
<!-- app/views/restaurants/new.html.erb -->
<%= f.input :photo, as: :file, 
            input_html: { class: 'custom-file-input'}, 
            label_html: { class: 'custom-file-label' }, 
            wrapper_html: { class: 'custom-file' } %>

```

Inspirations:
- https://developer.mozilla.org/en-US/docs/Web/API/FileReader#readAsDataURL%28%29
- https://stackoverflow.com/questions/53877660/looking-to-display-picture-on-upload-in-rails
- https://stackoverflow.com/questions/61158176/how-to-display-a-tempfile-image-in-views-with-rails-active-storage
- https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded

Good luck, have fun!
