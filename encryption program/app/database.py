from redis.sentinel import Sentinel
import os

class SecretNoneException(Exception):
  def __init__(self, message="Secret None"):
    super(SecretNoneException, self).__init__(message)

sentinel = Sentinel([("sentinel-0.sentinel.redis.svc.cluster.local", 5000), ("sentinel-1.sentinel.redis.svc.cluster.local", 5000), ("sentinel-2.sentinel.redis.svc.cluster.local", 5000)])
master = sentinel.master_for('mymaster', socket_timeout=0.3, password=os.environ["MASTERAUTH"])
slave = sentinel.slave_for('mymaster', socket_timeout=0.3, password=os.environ["MASTERAUTH"])

class DatabaseInteractor():

  def save_secret(name, secret):
    return master.set(name, secret)

  def fetch_secret(name):
    secret = slave.get(name)

    if secret == None:
      raise SecretNoneException()

    return secret.decode("utf-8")