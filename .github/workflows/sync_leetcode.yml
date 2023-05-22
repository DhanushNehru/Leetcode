name: Sync Leetcode

on:
  workflow_dispatch:
  schedule: 
    - cron: "0 8 * * *"
    #this runs once a week. ""0 8 * * 6"
    #"0 8 * * *" runs at 8:00 AM every day
    #"0 * * * *" #runs every hour

jobs:
  build:
    runs-on: ubuntu-latest
    permissions: write-all

    steps:
      - name: Sync
        uses: joshcai/leetcode-sync@v1.5
        with:
          github-token: ${{ secrets.LEETCODE_GITHUB_TOKEN }}
          leetcode-csrf-token: ${{ secrets.LEETCODE_CSRF_TOKEN }}
          leetcode-session: ${{ secrets.LEETCODE_SESSION }}
#           destination-folder: my-folder
