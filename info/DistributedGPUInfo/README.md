# Distributed community GPU training.

This project involves training enormous AI models that requires big gpu infrastructure.
To facilitate this, we distribute the training load to peers in the community, willing to spare their gpu power so big models are trained quickly.

Platforms like PyTorch and Tensorflow are able to train these enormous models because they distribute the workload over hundreds (or thousands) of GPUs at the same time. Unfortunately, these platforms require that each individual GPU system be identical (i.e., they have the same memory capacity and compute performance)

### So, HetSeq, which is adapted from the popular PyTorch package can be used for this project. It provides the capability to train large neural network models on heterogeneous infrastructure


More info: 
[Article](https://towardsdatascience.com/training-bert-at-a-university-eedcf940c754) | [GitHub Link](https://github.com/yifding/hetseq)

#### Use the Web-desktop platform [here](https://brainproject.ai/webos) to connect to codebase and start working. For trainng models, click on connect GPU, the browser will detect and attach the GPU, make sure it is correct and somewhat idle. Set performance usage bound in config slider. Default(CPU mem%: 30% | shared GPU mem: 2gb)
###### Earn evolve coin (soon) in exchange for your GPU used which can be used to further fork other people's "brain-models" and continue development.
