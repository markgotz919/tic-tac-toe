# ID=2 TOKEN=tokengoeshere OLD_PASSWORD=pikachu NEW_PASSWORD=raichu
# sh curl-scripts/json/change-password.sh

curl "https://wdi-library-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo