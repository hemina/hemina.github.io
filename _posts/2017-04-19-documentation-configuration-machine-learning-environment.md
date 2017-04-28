---
layout: post
title: "Documentation configuration Machine Learning Environment"
description: 
category: "Tech"
tags: [Work]
---
{% include JB/setup %}

[toc]

## 1. Operating system installation

### 1). Format USB + USB installer writing

Concerning the constrains of NVIDIA CUDA, we have to install supported versions of system. See <http://docs.nvidia.com/cuda/cuda-installation-guide-linux/#verify-you-have-supported-version-of-linux>

Among all these versions, we have chosen the latest Ubuntu 16.04 with the linux kernel of 4.4.0 . Here is the download link.
 <http://old-releases.ubuntu.com/releases/16.04.1/>

F9 -> BIOS -> UEFI-USB DISK -> Install Ubuntu
### 2). Disk partition
Here is an official recommendation of disk space distribution. <https://help.ubuntu.com/community/DiskSpace>
At the same time, we have to take into account the special partitions required by the security department, according to another confidential document.

```
sda: 
/home		| 931.5G

nvme0n1:
/boot/efi	| 476M
/boot		| 50G
/			| 50G
/opt		| 50G
/tmp		| 50G
/srv		| 100G
/proc		| 1G
/var		| 50G
/var/log	| 5G
/var/tmp	| 15G
/usr 		| rest...
/swap		| 16G
```

hostname: M205077

### 3). Reboot and verify the disk partition
Now we can verify the disk partition:

```
$ sudo lsblk -o NAME,FSTYPE,SIZE,MOUNTPOINT,LABEL
``` 

### 4). Install the Antivirus clamav
```
apt-get install clamav
```

## 2. NVIDIA CUDA8.0 installation
### 1). Find out the graphics card model
(negligable since we know that we use **GeForce GTX 1080 Ti**)

```
$ lspci -vnn | grep -i VGA -A 12

```

### 2). Verify You Have a Supported Version of Linux
```
$ uname -a

```

For Ubuntu 16.04 , we have to use the kernel 4.4.0 according to this link: <http://docs.nvidia.com/cuda/cuda-installation-guide-linux/#verify-you-have-supported-version-of-linux>


### 3). Verify the System Has gcc Installed
The xorg-edgers ppa provides the very latest nvidia drivers. Run the following commands to set it up.

```
$ gcc --version
```

Our gcc-5.4.0 works, even though it's not exactly the same as described in CUDA requirements (gcc-5.3.1).

### 4). Handle Conflicting Installation Methods
**(negliable if we haven't installed any CUDA/NVIDIA issues.)**

Before installing CUDA, any previously installations that could conflict should be
uninstalled. This will not affect systems which have not had CUDA installed previously,
or systems where the installation method has been preserved (RPM/Deb vs. Runfile). 

Use the following command to uninstall a Toolkit runfile installation:
```
$ sudo /usr/local/cuda-X.Y/bin/uninstall_cuda_X.Y.pl
```

Use the following command to uninstall a Driver runfile installation:
```
$ sudo /usr/bin/nvidia-uninstall
```

Use the following commands to uninstall a RPM/Deb installation:
```
$ sudo apt-get --purge remove <package_name> 
```

### 5). CUDA PACKAGE MANAGER INSTALLATION
```
$ cd Downloads
$ wget http://developer.download.nvidia.com/compute/cuda/repos/ubuntu1604/x86_64/cuda-repo-ubuntu1604_8.0.61-1_amd64.deb
$ sudo dpkg -i cuda-repo-ubuntu1604_8.0.61-1_amd64.deb
$ sudo apt-get update
$ sudo apt-get install cuda
```
Reboot the system to load the NVIDIA drivers.

### 6). Environment Setup
```
$ export PATH=/usr/local/cuda-8.0/bin${PATH:+:${PATH}}
$ export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

### 7). Install Writable Samples
In order to modify, compile, and run the samples, the samples must be installed with
write permissions. A convenience installation script is provided:

```
$ cuda-install-samples-8.0.sh ~
```
This script is installed with the cuda-samples-8-0 package. The cuda-samples-8-0
package installs only a read-only copy in `/usr/local/cuda-8.0/` samples.

### 8). Verify the Installation
Verify the Driver Version:

```
$ cat /proc/driver/nvidia/version 

$ cd ~/NVIDIA_CUDA-8.0_Samples
$ make
```

After compilation, find and run `deviceQuery` under `~/NVIDIA_CUDA-8.0_Samples`.
If the CUDA software is installed and configured correctly, the output for deviceQuery is that a device was found (the first highlighted line), that the
device matches the one on your system (the second highlighted line), and that the test
passed (the final highlighted line).

Running the bandwidthTest program ensures that the system and the CUDA-capable
device are able to communicate correctly. 

Now we have NVIDIA and CUDA both well installed.

## 3. Resolve the login loop problem
**(If there is no loop, ignore this part)**  
We have access to the guest session, but we have no access to the user session.

Usually this problem appears especially if you using the Nvidia drivers (stable or latest from their page)  and when Ubuntu get's update the login loop will appear.

The main reason for this it's the boot-login screen of Unity UI aka GNOME3 combined with the Nvidia proprietary drivers and causes this somehow.

This is the main reason that i don't recommend Unity-GNOME3 to Nvidia proprietary users i always recommend XFCE.

### 1) Install xubuntu-desktop
Changing the boot-login screen will permanently fix that:

```
Ctrl+Alt+F1
sudo apt-get update
sudo apt-get install xubuntu-desktop
sudo reboot
```

It will install the interface of Xubuntu (XFCE) also the boot-login screen which can be used combined with the Unity-GNOME3 UI and Nvidia proprietary drivers and problem it will solved plus the problem probably it will not appear in the future never again.

### 2) Create a new user
```
$ sudo adduser b12516
$ sudo usermod -aG sudo b12516
$ sudo service lightdm restart
```
### 3) Login with the new user account
Now delete the users with login problems:

```
$ sudo userdel b33654
$ sudo rm -rf /home/b33654
```
## 4. Install cuDNN
### 1) Download cuDNN-v5.1
With this link <https://developer.nvidia.com/cudnn> , we see many choices of available cuDNN versions. Since they said cuDNN v6 produces erroneous results, we download the cuDNN v5.1 Library for Linux.

### 2) Extract the downloaded file and copy the library to our CUDA library
```
sudo cd /usr/local/cuda
# This is where we installed CUDA

sudo cp -P ~/Downloads/cuda/include/* ./include/
sudo cp -P ~/Downloads/cuda/lib64/* ./lib64/

# Do the same thing for CUDA-8.0
sudo cd /usr/local/cuda-8.0
# This is where we installed CUDA

sudo cp -P ~/Downloads/cuda/include/* ./include/
sudo cp -P ~/Downloads/cuda/lib64/* ./lib64/
```
Adding `-P` here retains the symbolic links, i.e. `sudo cp -P lib64/libcudnn* /usr/lib/x86_64-linux-gnu/`, 
and avoids the message: `/sbin/ldconfig.real: /usr/lib/x86_64-linux-gnu/libcudnn.so.5 is not a symbolic link`

## 5. Install TensorFlow with Virtualenv

```
$ sudo apt-get install python-pip python-dev python-virtualenv

# Create a Virtualenv environment in the directory ~/tensorflow:
$ virtualenv --system-site-packages ~/tensorflow

# Activate the environment:
$ source ~/tensorflow/bin/activate  # If using bash

# Install GPU version Tensorflow
$ pip install --upgrade tensorflow-gpu
```
 
Test Tensorflow:

```
# Activate virtual environment
source tensorflow/bin/activate

python
import tensorflow as tf
sess = tf.Session(config=tf.ConfigProto(log_device_placement=True))
# To verify that TF is running with GPU

# Deactivate virtual environment
deactivate

```

## 6. Configure ssh service
### 1) Install `openssh-server`

```
sudo apt-get install openssh-server
```

<!--### 2) Modify `/etc/network/interfaces` to configure Internet
```
auto lo 
iface lo inet loopback
```
(waiting for internal Internet cable and proxy configuration...)
-->
### 2) Configure Internet Proxy
```
export http_proxy
export https_proxy 
export ftp_proxy

proxy navigateur

modify /etc/environment

create /etc/apt/apt.conf
```

### 3) Verify ssh is running

```
ps -e|grep ssh
```
If we see `sshd`, it means that `ssh-server` is running. Otherwise, we need :

```
sudo /etc/init.d/ssh start
```

### 4) Stop or restart ssh
```
sudo /etc/init.d/ssh stop
sudo /etc/init.d/ssh restart
```

### 5) Get the internal IP address
```
ifconfig -a
```

### 6) From the ssh client side
```
ssh 192.168.0.1 
# port 22 by default

ssh -p 22333 192.168.0.111 
# specify the port 22333

ssh -p 22333 b33654@192.168.0.111  
```

## 7. Back to kernel 4.4
**(If our Linux kernel version is not over than 4.4, skip this part)**  
### 1) Change kernel through Grub
```
dpkg -l | grep linux-image
dpkg -l | grep linux-headers

mv /etc/default/grub /etc/default/grub.bkp
#change GRUB_TIMEOUT to -1 and comment out GRUB_HIDDEN_TIMEOUT

sudo update-grub

reboot
```

Hold `shift` to `Grub`  
Choose `Ubuntu Avancé ...`  
Choose `Kernel 4.4.0`  

### 2) Test CUDA
```
cd NVIDIA_CUDA-8.0_Samples/bin/x86_64/linux/release
./deviceQuery
```

Probably the NVIDIA driver is not yet installed.
### 3) Install NVIDIA driver
```
sudo apt-get install nvidia-375
```

### 4) Check NVIDIA driver list (without sudo)

```
$ lspci -vnn | grep -i VGA -A 12
```
To see if nvidia is already in the line `Kernel driver in use`.
If we can't find the line `Kernel driver in use`, we need to activate `lightdm` by `sudo service lightdm restart`

### 5) Check the NVIDIA driver version
```
cat /proc/driver/nvidia/version
```

### 6) Retest CUDA 

```
cd NVIDIA_CUDA-8.0_Samples/bin/x86_64/linux/release
./deviceQuery
```

## 8. Patch the Linux Kernel with GRSecurity
A useful documentation: <https://www.noobunbox.net/serveur/securite/securiser-un-kernel-avec-grsecurity>

<!--```
wget https://www.grsecurity.net/~paxguy1/nvidia-drivers-375.20-pax.patch
```-->
### 1) Get the kernel
According to <http://deb.digdeo.fr/grsecurity-archives/kernel-4.4/> , we see the available version of grsecurity, then we shall download the corresponding version of linux kernel by wget. From the list, we choose the most recent kernel, which is 4.4.8 .

```
# Check our version of gcc
gcc -v

# Install the dependancies required
sudo apt-get install git fakeroot build-essential ncurses-dev xz-utils libssl-dev bc kernel-package gcc-5-plugin-dev

# Make a new directory 
mkdir ~/kernel-grsecurity && cd ~/kernel-grsecurity

# Download Linux kernel
 wget https://www.kernel.org/pub/linux/kernel/v4.x/linux-4.4.8.tar.xz
 wget https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-4.4.8.tar.sign

# Verify the signature
unxz linux-4.4.8.tar.xz
gpg --verify linux-4.4.7.tar.sign linux-4.4.7.tar

# If there is a error message showing 'can't find public key' with a RSA identifer, 6092693E for example, then we need to get this public key by:
gpg ...........

# Re-verify the signature
gpg --verify linux-4.4.7.tar.sign linux-4.4.7.tar

# When the verification is done, we continue to extract the archive by:
tar xvf linux-4.4.8.tar

```

### 2) Patch the kernel with Grsecurity
Even though we can no more find the Grsecurity patch in their official website <https://www.grsecurity.net/download.php>, we can luckily find the archives [here](http://deb.digdeo.fr/grsecurity-archives/kernel-4.4/).

```
cd ~/kernel-grsecurity/linux-4.4.7

# Download the patch and signature
http://deb.digdeo.fr/grsecurity-archives/kernel-4.4/grsecurity-3.1-4.4.8-201604252206.patch
http://deb.digdeo.fr/grsecurity-archives/kernel-4.4/grsecurity-3.1-4.4.8-201604252206.patch.sig

# Verify the signature
gpg --verify grsecurity-3.1-4.4.8-201604252206.patch.sig grsecurity-3.1-4.4.8-201604252206.patch

# If there is a error message showing 'can't find public key' with a RSA identifer, 6092693E for example, then we need to get this public key by:
gpg --keyserver pgpkeys.mit.edu --recv-keys 6092693E

# Re-verify the signature
gpg --verify grsecurity-3.1-4.4.8-201604252206.patch.sig grsecurity-3.1-4.4.8-201604252206.patch

# When the verification is good, patch the kernel
patch -p1 < grsecurity-3.1-4.4.8-201604252206.patch

# Not very long time to wait. Here we can see the files being patched
```

### 3) Kernel configuration
```
# Copy the configuration file of the current kernel(4.4.0-72), in order to avoid the risk of damage
cp /boot/config-$(uname -r) .config

# Open the configuration menu to activate **Automatic** configuration method
make menuconfig

# Enter **Security Options** -> **Grsecurity** -> Using space to check **Grsecurity** -> **Configuration Method** -> select **Automatic** -> save and exit

# Networking Support -> Networking options -> Network packet filtering framework (Netfilter) -> IP:Netfilter Configuration -> Enable: IPv4 masquerade support + iptables support
Networking Support -> Networking options -> Network packet filtering framework (Netfilter) -> IPV6:Netfilter Configuration -> ip6tables NAT support -> Enable: masquerade support
(not yet done because of the french UI)
```

### 4) Kernel compilation
```
# Tidy up 
make-kpkg clean

# Get the number of cores in the machine
nproc
# Here I got 44

# Compile the new kernel after being patched
fakeroot make-kpkg --initrd --revision=1.0.noobunbox kernel_image kernel_headers -j 44
```

## 8. Test with Virtual Machine

### 1) Install VirtualBox on Ubuntu
```
sudo apt-get install virtualbox

# Disable Secure Boot in order to use third-party drivers
```

### 2) Download Ubuntu iso
Among all these versions, we have chosen the latest Ubuntu 16.04 with the linux kernel of 4.4.0 . Here is the download link. <http://old-releases.ubuntu.com/releases/16.04.1/>

### 3) Solve installation error
```
Error: VT-x is disabled in the BIOS for all CPU modes (VERR_VMX_MSR_ALL_VMX_DISABLED)

Reboot the machine.
Press F10 to enter BIOS.
Security-> System Security
Enable Virtualization Technology (VTx) and Virtualization Technology Directed I/O (VTd).
Save and restart the machine.
```
### 4) Acces to the VM and continue Ubuntu installation

```
# SMBus/ BIOS error while booting Ubuntu in VirtualBox
=>
Turn off the option "Enable Nested Paging" in the VirtualBox configuration under Settings->System->Acceleration.
```
<!--sudo mount -t vboxsf Downloads ˜/Downloads
Error: unknown filesystem type vboxsf
=>
sudo apt-get install virtualbox-ose-guest-utils
Error: unable to locate package
=>
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install virtualbox-ose-guest-utils-->

### 5) Transfer files between host and VM through ssh/scp
```
# In the Terminal of host, archive the file that we are going to transfer using tar, and get the current internal IP:
ifconfig
# Here I got 192.168.1.16

# In the Terminal of VM, test the ssh connexion 
ssh b33654@192.168.1.16
# success! Now we can see the path of files we would like to transfer, such as ~/kernel-grsecurity

# EXIT the ssh connexion on VM, and start copy files
scp b33654@192.168.1.16:~/kernel-grsecurity/linux-image*.deb ~
scp b33654@192.168.1.16:~/kernel-grsecurity/linux-header*.deb ~

# Install NVIDIA driver to model the situation(without CUDA)
sudo apt-get nvidia-375
```

### 6) Kernel installation on the VM
```
apt-get install paxctl paxtest

sudo dpkg -i linux-headers-4.4.7-grsec_1.0.noobunbox_amd64.deb
sudo dpkg -i linux-image-4.4.7-grsec_1.0.noobunbox_amd64.deb

```

