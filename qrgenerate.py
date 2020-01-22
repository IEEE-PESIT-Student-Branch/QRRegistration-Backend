import qrcode
from PIL import ImageDraw
import sys,os

os.mkdir(os.getcwd()+'/QRs/')
id=202010000001
f = open(os.getcwd()+'/upload.csv',"w")

name = input()
f.write(str(id)+","+name)
qr = qrcode.make(id)
i = ImageDraw.Draw(qr)
i.text((120,260),str(id))
qr.save('QRs/'+str(id))
id+=1

while True:
    try:
        print(name)
        name = input()
        f.write("\n"+str(id)+","+name)
        qr = qrcode.make(id)
        i = ImageDraw.Draw(qr)
        i.text((120,260),str(id))
        qr.save('QRs/'+str(id))
        id+=1
    except:
        break

f.close()
print("Done Generating QR Codes")