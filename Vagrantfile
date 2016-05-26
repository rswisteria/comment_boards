# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/xenial64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 80, host: 8080, auto_correct: true

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant_data",
                          mount_options: ["dmode=777", "fmode=777"],
                          type: 'rsync',
                          rsync__exclude: %w(.git vendor/bundle node_modules)

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update -y
    sudo apt-get install -y nginx
    apt-get install -y openssl libreadline6 libreadline6-dev curl zlib1g zlib1g-dev libssl-dev libyaml-dev \
      libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison \
      pkg-config libffi-dev imagemagick build-essential libgmp3-dev sqlite3 libsqlite3-dev \
      netcat-openbsd libcurl4-openssl-dev libreadline6-dev libncurses5-dev libgdbm-dev libgdbm3 \
      wget vim git telnet ntp sysstat
    apt-get remove -y ruby

    # ruby install
    su - ubuntu -c 'git clone https://github.com/sstephenson/rbenv.git ~/.rbenv'
    su - ubuntu -c 'git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build'
    su - ubuntu -c 'echo \'export PATH="$HOME/.rbenv/bin:$PATH"\' >> ~/.bash_profile'
    su - ubuntu -c 'echo \'eval "$(rbenv init -)"\' >> ~/.bash_profile'
    su - ubuntu -c 'rbenv install 2.3.1'

    # ExecJS runtime install (nodejs)
    apt-get install nodejs

    # mysql install
    dpkg-reconfigure -f noninteractive
    echo "mysql-server mysql-server/root_password password password" | sudo debconf-set-selections
    echo "mysql-server mysql-server/root_password_again password password" | sudo debconf-set-selections
    apt-get -y install mysql-server libmysqlclient-dev

    # redis install
    apt-get -y install redis-server


  SHELL
end
