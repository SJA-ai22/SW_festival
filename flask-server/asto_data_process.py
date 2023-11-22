from astropy import units as u
from astropy.coordinates import SkyCoord, EarthLocation, AltAz
from astropy.time import Time
import datetime

def ETH(ra, dec, lat, lon):
    # 적도 좌표 설정
    sky_coord = SkyCoord(ra, dec, frame='icrs')

    # 관측 위치 설정
    location = EarthLocation(lat=lat*u.deg, lon=lon*u.deg, height=20*u.m)

    # Python datetime 라이브러리를 이용하여 현재 시간을 UTC로 얻기
    now = datetime.datetime.utcnow()

    # 관측 시간 설정 (현재 시간)
    observing_time = Time(now)

    # 좌표계 변환
    alt_az_coord = sky_coord.transform_to(AltAz(obstime=observing_time, location=location))
    
    return alt_az_coord.alt, alt_az_coord.az