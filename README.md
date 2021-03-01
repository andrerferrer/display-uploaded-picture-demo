## Goal
This is an app to teach how to improve the file input with `bootstrap` and `simple_for`.
This demo was created from [this one](https://github.com/andrerferrer/basic-photo-demo).

[Check my other demos](https://github.com/andrerferrer/dedemos/).

## How to
```erb
<!-- app/views/restaurants/new.html.erb -->
<%= f.input :photo, as: :file, 
            input_html: { class: 'custom-file-input'}, 
            label_html: { class: 'custom-file-label' }, 
            wrapper_html: { class: 'custom-file' } %>

```

### Check it Locally
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

Good luck, have fun!
