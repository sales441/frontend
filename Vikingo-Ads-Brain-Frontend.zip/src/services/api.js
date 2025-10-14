PS C:\Users\sales> $body = @{ email='ivan@depilcompany.com'; password='Isabella0101@' } | ConvertTo-Json
PS C:\Users\sales> Invoke-RestMethod -Uri 'https://backhand-production-bc90.up.railway.app/api/auth/login' -Method Post -Body $body -ContentType 'application/json'
