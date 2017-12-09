FROM data_php-msf-demo

RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list \
    && apt-get update && apt-get install -y \
    cron \
    # proxy config
    #&& pear config-set http_proxy ${HTTP_PROXY} \
    && rm -rf /var/cache/apt/* \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /tmp/pear/temp/*