FROM php:7.2-fpm

RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list \
    && apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libssl-dev \
    librabbitmq-dev \
    # proxy config
    #&& pear config-set http_proxy ${HTTP_PROXY} \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install -j$(nproc) pdo_mysql \
    && docker-php-ext-install -j$(nproc) opcache \
    && pecl install amqp \
    && pecl install igbinary \
    && pecl install mongodb \
    && echo yes | pecl install redis \
    && pecl install yac-2.0.2 \
    && docker-php-ext-enable amqp igbinary mongodb redis yac opcache \
    && rm -rf /var/cache/apt/* \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /tmp/pear/temp/*